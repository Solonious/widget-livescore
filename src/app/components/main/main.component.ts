import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MdDialog} from '@angular/material';
import { PopupComponent } from '../options-popup/options-popup.component';
import { environment } from '../../../environments/environment';

import { DataService } from '../../services/data.service';

import { Countries } from '../../shared/countries';
import { Leagues } from '../../shared/leagues';
import {DataTestService} from '../../services/data-test.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DataService, DataTestService]
})
export class MainComponent implements OnInit {
  selectedLeague: string;
  selectedCountry: string;
  selectedOption: string;
  countries: Countries[];
  leagues: Leagues[];
  league_id: number;
  dateFrom = new FormControl();
  dateTo = new FormControl();
  country = new FormControl('Select country');
  league = new FormControl('Select league');
  tableDataTabs = [];
  errorTitle: string;
  error: any;
  displayStatus = 0;
  loading = false;
  constructor(
    public dialog: MdDialog,
    private dataService: DataService,
    private dataTestService: DataTestService
    ) {
  }

  ngOnInit() {
    this.getCountries();
    this.country.valueChanges.subscribe(val => {
      this.getLeagues(val);
    }, err => this.error = err);
    this.league.valueChanges.subscribe(val => {
      this.league_id = val;
    });
  }
  getCountries(): void {
    const service = (environment.production) ? this.dataService : this.dataTestService;
    this.loading = true;
    service.getCountries()
      .subscribe(res => {
        this.countries = res;
        this.loading = false;
      }, () => this.loading = false);
  }
  getLeagues(id: any): void {
    this.loading = true;
    const service = (environment.production) ? this.dataService : this.dataTestService;
    service.getLeagues(id)
      .subscribe(res => {
        this.leagues = res.filter(item => item.country_id === id);
          this.loading = false;
        },
        err => {
          this.error = err; console.log(err);
          this.loading = false;
        });
  }
  getEvents(): void {
    this.displayStatus = 3;
    this.loading = true;
    const service = (environment.production) ? this.dataService : this.dataTestService;
    service.getEvents(this.dateFrom.value, this.dateTo.value, this.league_id)
      .subscribe(res => {
          if (res.error) {
            this.errorTitle = res.message;
            this.displayStatus = 1;
            this.loading = false;
          }
          this.tableDataTabs.push({time: new Date(), data: res});
          console.log(this.tableDataTabs);
          this.loading = false;
        },
        err => {
          this.error = err;
          this.loading = false;
          console.log(err)});
  }
  deleteTab(id: number): void {
    this.tableDataTabs.splice(id, 1);
  }
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent, {
      height: '320px',
      width: '270px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}
