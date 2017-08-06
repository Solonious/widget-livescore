import {Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import {DataSource} from '@angular/cdk';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
  @Input() data: any;
  displayedColumns = [
    'countryName',
    'leagueName',
    'homeTeam',
    'awayTeam',
    'homeAwayScore',
    'matchStatus',
    'matchDate',
    'matchTime'
  ];
  tableDatabase: TableDatabase | null;
  dataSource: TableDataSource | null;

  constructor(http: Http) {
    this.tableDatabase = new TableDatabase(http);
    this.dataSource = new TableDataSource(this.tableDatabase);
  }
}

export interface EventsData {
  match_id: number;
  country_id: number;
  country_name: string;
  league_id: number;
  league_name: string;
  match_date: string;
  match_status: string;
  match_time: string;
  match_hometeam_name: string;
  match_hometeam_score: number;
  match_awayteam_name: string;
  match_awayteam_score: number;
  match_hometeam_halftime_score: number;
  match_awayteam_halftime_score: number;
  match_live: number;
  goalscorer: [any];
}

export class TableDatabase {
  private dataUrl = 'http://localhost:4200/assets/mocks/events.json';
  getTableData(): Observable<EventsData[]> {
    return this.http.get(this.dataUrl).map(res => res.json() as EventsData[]);
    }
  constructor(private http: Http) {}
}

export class TableDataSource extends DataSource<EventsData> {
  constructor(private _tableDatabase: TableDatabase) {
    super();
  }

  connect(): Observable<EventsData[]> {
    return this._tableDatabase.getTableData();
  }
  disconnect() {}
}
