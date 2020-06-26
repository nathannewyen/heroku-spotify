import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { NOTATIONS } from "../definitions/notation";

import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

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
        "rgba(30, 64, 94, 0.2)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(30, 64, 94, 1)",
      ],
      borderWidth: 2,
    },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
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
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {
      data: [0, 1, 2, 3, 4, 5],
      label: "Audio Features",
    },
  ];

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
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
        console.log(this.trackFeature);
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
            label: "Audio Features",
          },
        ];
      });
    });
  }
}
