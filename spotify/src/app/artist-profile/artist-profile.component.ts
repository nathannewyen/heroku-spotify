import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
	selector: 'app-artist-profile',
	templateUrl: './artist-profile.component.html',
	styleUrls: [ './artist-profile.component.scss' ]
})
export class ArtistProfileComponent implements OnInit {
	private artist_name: string;
	id: string;
	artist: [];

	constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.pipe(map((params) => params['id'])).subscribe((id) => {
			this.userService.getArtistProfile(id).subscribe((artist) => {
				this.artist = artist;
			});
		});
	}
}
