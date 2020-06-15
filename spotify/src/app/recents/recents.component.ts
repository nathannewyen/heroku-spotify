import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-recents",
  templateUrl: "./recents.component.html",
  styleUrls: ["./recents.component.scss"],
})
export class RecentsComponent implements OnInit {
  user_current_tracks: any;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getCurrentTrack();
  }

  getCurrentTrack() {
    let observable = this.userService.getUserCurrentTrack();
    observable.subscribe((data) => {
      this.user_current_tracks = data.items;
    });
  }
}
