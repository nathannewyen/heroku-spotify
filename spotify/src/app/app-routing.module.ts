import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { PlaylistsComponent } from "./playlists/playlists.component";
import { TopArtistsComponent } from "./top-artists/top-artists.component";
import { TopTracksComponent } from "./top-tracks/top-tracks.component";
import { RecentsComponent } from "./recents/recents.component";
import { ArtistProfileComponent } from "./artist-profile/artist-profile.component";
import { TrackProfileComponent } from "./track-profile/track-profile.component";
import { PlaylistProfileComponent } from "./playlist-profile/playlist-profile.component";
import { RecommendComponent } from "./recommend/recommend.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "artists", component: TopArtistsComponent },
  { path: "tracks", component: TopTracksComponent },
  { path: "playlists", component: PlaylistsComponent },
  { path: "recent", component: RecentsComponent },
  { path: "artists/:id", component: ArtistProfileComponent },
  { path: "tracks/:id", component: TrackProfileComponent },
  { path: "playlists/:id", component: PlaylistProfileComponent },
  { path: "recommendations/:id", component: RecommendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
