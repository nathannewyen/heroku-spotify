import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-recommend",
  templateUrl: "./recommend.component.html",
  styleUrls: ["./recommend.component.scss"],
})
export class RecommendComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}
}
