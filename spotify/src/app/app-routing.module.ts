import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { PlaylistsComponent } from "./playlists/playlists.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "test", component: PlaylistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
