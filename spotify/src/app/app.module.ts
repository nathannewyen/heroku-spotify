import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { TopArtistsComponent } from "./top-artists/top-artists.component";
import { TopTracksComponent } from "./top-tracks/top-tracks.component";
import { RecentsComponent } from "./recents/recents.component";
import { PlaylistsComponent } from "./playlists/playlists.component";
import { UserComponent } from "./user/user.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ArtistProfileComponent } from "./artist-profile/artist-profile.component";
import { NgxSpinnerModule } from "ngx-spinner";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TrackProfileComponent } from './track-profile/track-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopArtistsComponent,
    TopTracksComponent,
    RecentsComponent,
    PlaylistsComponent,
    UserComponent,
    ArtistProfileComponent,
    TrackProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
