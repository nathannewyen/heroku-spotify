import { Component, OnInit, Pipe } from "@angular/core";
import { TracksService } from "../services/tracks.service";
import { NgxSpinnerService } from "ngx-spinner";

@Pipe({
  name: "minuteSeconds",
})
@Component({
  selector: "app-top-tracks",
  templateUrl: "./top-tracks.component.html",
  styleUrls: ["./top-tracks.component.scss"],
})
export class TopTracksComponent implements OnInit {
  private topTracksShortTerm: Array<any>;
  private topTracksMediumTerm: Array<any>;
  private topTracksLongTerm: Array<any>;
  private selectedTerm: number;
  visible = false;

  constructor(
    private tracksService: TracksService,
    private spinner: NgxSpinnerService
  ) {
    this.selectedTerm = 0;
    this.tracksService.setSelectedTerm(this.selectedTerm);
  }

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.visible = true;
    }, 1000);

    this.tracksService.topTracks$.subscribe((res) => {
      this.topTracksShortTerm = res.shortTerm;
      this.topTracksMediumTerm = res.mediumTerm;
      this.topTracksLongTerm = res.longTerm;
    });
  }

  private selectTerm(term: number): void {
    this.selectedTerm = term;
    this.tracksService.setSelectedTerm(this.selectedTerm);
  }

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ":" + (value - minutes * 60);
  }
}
