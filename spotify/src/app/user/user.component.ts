import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  private user_name: string;
  private user_follower: number;
  private user_image: Array<any>;
  private user_following: any;
  private user_playlists: any;
  constructor(private router: Router, private userService: UserService) {
    this.user_name = this.userService.getUserProfile().display_name;
    this.user_follower = this.userService.getUserProfile().followers;
    this.user_image = this.userService.getUserProfile().images;
  }

  ngOnInit() {
    this.getFollowing();
    this.getPlaylists();
  }

  getFollowing() {
    let observable = this.userService.getUserFollowing();
    observable.subscribe((data) => {
      this.user_following = data.artists.total;
    });
  }

  getPlaylists() {
    let observable = this.userService.getUserPlaylists();
    observable.subscribe((data) => {
      this.user_playlists = data.items.length;
    });
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(["/"]);
  }
}
