import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { NOTATIONS } from "../definitions/notation";

@Component({
  selector: "app-track-profile",
  templateUrl: "./track-profile.component.html",
  styleUrls: ["./track-profile.component.scss"],
})
export class TrackProfileComponent implements OnInit {
  id: string;
  track: [];
  trackAudio: [];
  trackFeature: [];
  notations = NOTATIONS;

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
      });
    });
  }
}
