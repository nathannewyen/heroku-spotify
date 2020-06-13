import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { TopTracksComponent } from './top-tracks/top-tracks.component';
import { RecentsComponent } from './recents/recents.component';
import { PlaylistsComponent } from './playlists/playlists.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopArtistsComponent,
    TopTracksComponent,
    RecentsComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
