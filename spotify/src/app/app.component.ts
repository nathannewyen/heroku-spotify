import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { UserService } from "./services/user.service";
import { TracksService } from "./services/tracks.service";
import { ArtistsService } from "./services/artists.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "spotify";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService,
    private tracksService: TracksService,
    private artistsService: ArtistsService
  ) {}

  ngOnInit() {
    const itemId = "ng-spotify-access-token";
    const accessToken = localStorage.getItem(itemId);

    if (accessToken) {
      this.userService
        .setLoggedInUser(accessToken)
        .then(() => {
          this.tracksService.getTopTracksForAllTerms();
          this.artistsService.getTopArtistsForAllTerms();
        })
        .catch((err) => {
          console.error("ERROR:", err);
        });
    } else {
      this.route.queryParams.subscribe((params) => {
        if (params["access_token"]) {
          localStorage.setItem(itemId, params["access_token"]);

          this.userService
            .setLoggedInUser(params["access_token"])
            .then(() => {
              this.tracksService.getTopTracksForAllTerms();
              this.artistsService.getTopArtistsForAllTerms();
              this.location.go("/");
            })
            .catch((err) => {
              console.error("ERROR:", err);
            });
        }
      });
    }
  }

  private isLoggedIn(): boolean {
    if (
      this.userService.getLoginStatus() &&
      this.userService.getUserProfile()
    ) {
      return true;
    }

    return false;
  }

  private isTracksPage(): boolean {
    if (this.router.url === "/tracks") {
      return true;
    }

    return false;
  }
}
