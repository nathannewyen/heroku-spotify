import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { TimeRange } from '../definitions/time-range';
import { TopTypeRanges } from '../definitions/top-type-ranges';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ArtistsService {
	private topArtists: TopTypeRanges;
	public topArtists$: BehaviorSubject<TopTypeRanges>;

	constructor(private http: HttpClient, private userService: UserService) {
		this.topArtists = {
			shortTerm: [],
			mediumTerm: [],
			longTerm: []
		};

		this.topArtists$ = new BehaviorSubject<TopTypeRanges>(this.topArtists);
	}

	public getTopArtists(timeRange: TimeRange = 'medium_term'): Observable<any> {
		const endpoint = environment.spotifyApi.host + 'me/top/artists';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `Bearer ${this.userService.getAccessToken()}`
			}),
			params: new HttpParams().set('limit', '50').set('time_range', timeRange)
		};

		return this.http.get(endpoint, httpOptions);
	}

	public getTopArtistsShortTerm(): void {
		this.getTopArtists('short_term').subscribe(
			(res) => {
				this.topArtists.shortTerm = res.items;
				this.topArtists$.next(this.topArtists);
			},
			(err) => {
				console.error('ERROR', err);
			}
		);
	}

	public getTopArtistsMediumTerm(): void {
		this.getTopArtists('medium_term').subscribe(
			(res) => {
				this.topArtists.mediumTerm = res.items;
				this.topArtists$.next(this.topArtists);
			},
			(err) => {
				console.error('ERROR', err);
			}
		);
	}

	public getTopArtistsLongTerm(): void {
		this.getTopArtists('long_term').subscribe(
			(res) => {
				this.topArtists.longTerm = res.items;
				this.topArtists$.next(this.topArtists);
			},
			(err) => {
				console.error('ERROR', err);
			}
		);
	}

	public getTopArtistsForAllTerms(): void {
		this.getTopArtistsShortTerm();
		this.getTopArtistsMediumTerm();
		this.getTopArtistsLongTerm();
	}
}
