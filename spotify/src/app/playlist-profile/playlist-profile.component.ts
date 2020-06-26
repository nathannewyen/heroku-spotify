import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-playlist-profile",
  templateUrl: "./playlist-profile.component.html",
  styleUrls: ["./playlist-profile.component.scss"],
})
export class PlaylistProfileComponent implements OnInit {
  id: string;
  playlist: any;
  stream: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.pipe(map((params) => params["id"])).subscribe((id) => {
      this.userService.getPlaylistProfile(id).subscribe((playlist) => {
        this.playlist = playlist;
      });
    });
  }
}
