import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Countries } from '../shared/countries';
import { Leagues } from '../shared/leagues';

@Injectable()
export class DataService {
  apiFootbal = 'https://apifootball.com/api/?action=';
  // apiFootbal: string;
  APIkey = '3681972507b2eda3b2f50a5e4db9e7dc3b802789b7295e237247a7784faa15a3';
  // APIkey: string;
  constructor(private http: Http) { }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
  getCountries(): Observable<Countries[]> {
    return this.http.get(`${this.apiFootbal}get_countries&APIkey=${this.APIkey}`)
      .map(res => res.json() as Countries[])
      .catch(this.handleError);
  }
  getLeagues(id: any): Observable<Leagues[]> {
    return this.http.get(`${this.apiFootbal}get_leagues&country_id=${id}&APIkey=${this.APIkey}`)
      .map(res => res.json() as Leagues[])
      .catch(this.handleError);
  }
  getEvents(from: any, to: any, league_id: number): Observable<any> {
    return this.http.get(`${this.apiFootbal}get_events&from=${from}&to=${to}&league_id=${league_id}&APIkey=${this.APIkey}`)
      .map(res => res.json() as any)
      .catch(this.handleError);
  }
  setApiKey(key: string): void {
    this.APIkey = key;
  }
  setCurrentApi(key: string): void {
    this.apiFootbal = key;
  }
}
