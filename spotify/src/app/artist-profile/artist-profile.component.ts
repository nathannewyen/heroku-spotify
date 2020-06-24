import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-artist-profile",
  templateUrl: "./artist-profile.component.html",
  styleUrls: ["./artist-profile.component.scss"],
})
export class ArtistProfileComponent implements OnInit {
  private artist_name: string;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.getArtist();
  }

  getArtist() {
    let observable = this.userService.getArtistProfile();
    observable.subscribe((data) => {
      this.artist_name = data.artists;
      console.log(this.artist_name);
    });
  }
}
