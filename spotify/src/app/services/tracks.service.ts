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
export class TracksService {
	private topTracks: TopTypeRanges;
	public topTracks$: BehaviorSubject<TopTypeRanges>;
	private selectedTerm: number;

	constructor(private http: HttpClient, private userService: UserService) {
		this.topTracks = {
			shortTerm: [],
			mediumTerm: [],
			longTerm: []
		};

		this.topTracks$ = new BehaviorSubject<TopTypeRanges>(this.topTracks);
	}

	public getTopTracks(timeRange: TimeRange = 'medium_term'): Observable<any> {
		const endpoint = environment.spotifyApi.host + 'me/top/tracks';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `Bearer ${this.userService.getAccessToken()}`
			}),
			params: new HttpParams().set('limit', '50').set('time_range', timeRange)
		};

		return this.http.get(endpoint, httpOptions);
	}

	public getTopTracksShortTerm(): void {
		this.getTopTracks('short_term').subscribe(
			(res) => {
				this.topTracks.shortTerm = res.items;
				this.topTracks$.next(this.topTracks);
			},
			(err) => {
				console.error('ERROR', err);
			}
		);
	}

	public getTopTracksMediumTerm(): void {
		this.getTopTracks('medium_term').subscribe(
			(res) => {
				this.topTracks.mediumTerm = res.items;
				this.topTracks$.next(this.topTracks);
			},
			(err) => {
				console.error('ERROR', err);
			}
		);
	}

	public getTopTracksLongTerm(): void {
		this.getTopTracks('long_term').subscribe(
			(res) => {
				this.topTracks.longTerm = res.items;
				this.topTracks$.next(this.topTracks);
			},
			(err) => {
				console.error('ERROR', err);
			}
		);
	}

	public getTopTracksForAllTerms(): void {
		this.getTopTracksShortTerm();
		this.getTopTracksMediumTerm();
		this.getTopTracksLongTerm();
	}

	public setSelectedTerm(term: number): void {
		this.selectedTerm = term;
	}

	public getSelectedTerm(): number {
		return this.selectedTerm;
	}

	public getUsersTopTracksBySelectedTerm(): Array<any> {
		switch (this.selectedTerm) {
			case 0:
				return this.topTracks.shortTerm;

			case 1:
				return this.topTracks.mediumTerm;

			case 2:
				return this.topTracks.longTerm;

			default:
				return this.topTracks.shortTerm;
		}
	}
}
