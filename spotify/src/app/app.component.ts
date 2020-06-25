import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { UserService } from "./services/user.service";
import { TracksService } from "./services/tracks.service";
import { ArtistsService } from "./services/artists.service";
import { NgxSpinnerService } from "ngx-spinner";

declare var $: any;

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
    private artistsService: ArtistsService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    const itemId = "ng-spotify-access-token";
    const accessToken = localStorage.getItem(itemId);

    // jQuery
    $("#content").hide();

    $(".nav-item").click(function () {
      $(".nav-item").removeClass("active");
      $(".nav-item").addClass("next");
      $(this).addClass("active");
    });

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    // End jQuery

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
