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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopArtistsComponent,
    TopTracksComponent,
    RecentsComponent,
    PlaylistsComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
