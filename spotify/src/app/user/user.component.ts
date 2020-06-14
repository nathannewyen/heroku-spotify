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
  constructor(private router: Router, private userService: UserService) {
    this.user_name = this.userService.getUserProfile().display_name;
    this.user_follower = this.userService.getUserProfile().followers;
    this.user_image = this.userService.getUserProfile().images;
  }

  ngOnInit() {
    // this.getFollowing();
  }

  // getFollowing() {
  //   let observable = this.userService.getUserFollowing();
  //   observable.subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  logout(): void {
    this.userService.logout();
    this.router.navigate(["/"]);
  }
}
