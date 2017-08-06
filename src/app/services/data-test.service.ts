import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Countries } from '../shared/countries';
import { Leagues } from '../shared/leagues';

@Injectable()
export class DataTestService {
  apiFootbal = environment.host;
  countriesApi = environment.countries;
  leaguesApi = environment.leagues;
  eventsApi = environment.events;
  countries: Countries[];
  leagues: Leagues[];
  constructor(private http: Http) { }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
  getCountries(): Observable<Countries[]> {
    return this.http.get(`${this.apiFootbal}/${this.countriesApi}`)
      .map(res => this.countries = res.json() as Countries[])
      .catch(this.handleError);
  }
  getLeagues(id: any): Observable<Leagues[]> {
    return this.http.get(`${this.apiFootbal}/${this.leaguesApi}`)
      .map(res => res.json() as Leagues[])
      .catch(this.handleError);
  }
  getEvents(from: any, to: any, league_id: number): Observable<any> {
    return this.http.get(`${this.apiFootbal}/${this.eventsApi}`)
      .map(res => res.json() as any)
      .catch(this.handleError);
  }
}
