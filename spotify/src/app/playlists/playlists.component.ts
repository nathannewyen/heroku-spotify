import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-playlists",
  templateUrl: "./playlists.component.html",
  styleUrls: ["./playlists.component.scss"],
})
export class PlaylistsComponent implements OnInit {
  playlists: any;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.getPlaylists();
  }

  getPlaylists() {
    let observable = this.userService.getUserPlaylists();
    observable.subscribe((data) => {
      this.playlists = data.items;
    });
  }
}
