import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { NOTATIONS } from "../definitions/notation";

import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-track-profile",
  templateUrl: "./track-profile.component.html",
  styleUrls: ["./track-profile.component.scss"],
})
export class TrackProfileComponent implements OnInit {
  id: string;
  track: [];
  trackAudio: any;
  trackFeature: any;
  audioFeatures: any;
  notations = NOTATIONS;
  visible = false;

  // Bar Chart
  public barChartColors = [
    {
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(0 ,250 , 154, 0.2)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "	rgba(0, 250, 154, 1)",
      ],
      borderWidth: 2,
    },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "#5F5F5F",
            color: "#5F5F5F",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "#5F5F5F",
            color: "#5F5F5F",
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };
  public barChartLabels: Label[] = [
    "acousticness",
    "danceability",
    "energy",
    "instrumentalness",
    "liveness",
    "speechiness",
    "valence",
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {
      data: [],
      label: "Audio Features",
    },
  ];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.visible = true;
    }, 1000);

    this.route.params.pipe(map((params) => params["id"])).subscribe((id) => {
      this.userService.getTrackProfile(id).subscribe((track) => {
        this.track = track;
      });
    });

    this.route.params.pipe(map((params) => params["id"])).subscribe((id) => {
      this.userService.getAudioAnalysis(id).subscribe((trackAudio) => {
        this.trackAudio = trackAudio;
      });
    });

    this.route.params.pipe(map((params) => params["id"])).subscribe((id) => {
      this.userService.getAudioFeature(id).subscribe((trackFeature) => {
        this.trackFeature = trackFeature;
        this.barChartData = [
          {
            data: [
              this.trackFeature.acousticness,
              this.trackFeature.danceability,
              this.trackFeature.energy,
              this.trackFeature.instrumentalness,
              this.trackFeature.liveness,
              this.trackFeature.speechiness,
              this.trackFeature.valence,
            ],
          },
        ];
      });
    });
  }
}
