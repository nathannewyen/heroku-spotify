import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { environment } from "../../environments/environment";
import { ArtistsService } from "../services/artists.service";
import { TracksService } from "../services/tracks.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
declare var $: any;

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  private userId: string;
  private loginUrl: string;
  private topArtistsShortTerm: Array<any>;
  private topArtistsMediumTerm: Array<any>;
  private topArtistsLongTerm: Array<any>;
  private topTracksShortTerm: Array<any>;
  private topTracksMediumTerm: Array<any>;
  private topTracksLongTerm: Array<any>;

  constructor(
    private userService: UserService,
    private artistsService: ArtistsService,
    private tracksService: TracksService,
    private router: Router
  ) {
    this.loginUrl = environment.loginUrl;
  }

  ngOnInit() {
    this.artistsService.topArtists$.subscribe((res) => {
      this.topArtistsShortTerm = res.shortTerm;
      this.topArtistsMediumTerm = res.mediumTerm;
      this.topArtistsLongTerm = res.longTerm;
    });

    this.tracksService.topTracks$.subscribe((res) => {
      this.topTracksShortTerm = res.shortTerm;
      this.topTracksMediumTerm = res.mediumTerm;
      this.topTracksLongTerm = res.longTerm;
    });
  }
}
