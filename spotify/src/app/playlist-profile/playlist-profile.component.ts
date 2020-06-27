import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-playlist-profile",
  templateUrl: "./playlist-profile.component.html",
  styleUrls: ["./playlist-profile.component.scss"],
})
export class PlaylistProfileComponent implements OnInit {
  id: string;
  playlist: any;
  stream: any;
  trackOne: any;
  trackTwo: any;
  trackThree: any;
  tracksFeature: any;
  sum_acousticness = 0;
  sum_danceability = 0;
  sum_energy = 0;
  sum_instrumentalness = 0;
  sum_liveness = 0;
  sum_speechiness = 0;
  sum_valence = 0;

  avg_acousticness: any;
  avg_danceability: any;
  avg_energy: any;
  avg_instrumentalness: any;
  avg_liveness: any;
  avg_speechiness: any;
  avg_valence: any;

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
      borderWidth: 1,
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
  public barChartType: ChartType = "horizontalBar";
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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.pipe(map((params) => params["id"])).subscribe((id) => {
      this.userService.getPlaylistProfile(id).subscribe((playlist) => {
        this.playlist = playlist;
        this.trackOne = playlist.tracks.items[0];
        this.trackTwo = playlist.tracks.items[1];
        this.trackThree = playlist.tracks.items[2];
        const ids = [
          this.trackOne.track.id,
          this.trackTwo.track.id,
          this.trackThree.track.id,
        ];

        this.userService
          .getSeveralTrackAudioFeatures(ids)
          .subscribe((tracksFeature) => {
            this.tracksFeature = tracksFeature;

            for (const entry of this.tracksFeature.audio_features) {
              // Sum
              this.sum_acousticness =
                this.sum_acousticness + entry.acousticness;

              this.sum_danceability =
                this.sum_danceability + entry.danceability;

              this.sum_energy = this.sum_energy + entry.energy;

              this.sum_instrumentalness =
                this.sum_instrumentalness + entry.instrumentalness;

              this.sum_liveness = this.sum_liveness + entry.liveness;
              this.sum_speechiness = this.sum_speechiness + entry.speechiness;
              this.sum_valence = this.sum_valence + entry.valence;
            }

            this.avg_acousticness = this.sum_acousticness / 3;
            this.avg_danceability = this.sum_danceability / 3;
            this.avg_energy = this.sum_energy / 3;
            this.avg_instrumentalness = this.sum_instrumentalness / 3;
            this.avg_liveness = this.sum_liveness / 3;
            this.avg_speechiness = this.sum_speechiness / 3;
            this.avg_valence = this.sum_valence / 3;

            this.barChartData = [
              {
                data: [
                  this.avg_acousticness,
                  this.avg_danceability,
                  this.avg_energy,
                  this.avg_instrumentalness,
                  this.avg_liveness,
                  this.avg_speechiness,
                  this.avg_valence,
                ],
              },
            ];
          });
      });
    });
  }
}
