import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MdDialog} from '@angular/material';
import { PopupComponent } from '../options-popup/options-popup.component';

import { DataService } from '../../services/data.service';

import { Countries } from '../../shared/countries';
import { Leagues } from '../../shared/leagues';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedLeague: string;
  selectedCountry: string;
  selectedOption: string;
  position = 'below';
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
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
    private dataService: DataService
    ) { }

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
    this.loading = true;
    this.dataService.getCountries()
      .subscribe(res => {
        this.countries = res;
        this.loading = false;
      }, () => this.loading = false);
  }
  getLeagues(id: any): void {
    this.loading = true;
    this.dataService.getLeagues(id)
      .subscribe(res => {
          this.leagues = res;
          console.log(res);
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
    this.dataService.getEvents(this.dateFrom.value, this.dateTo.value, this.league_id)
      .subscribe(res => {
          if (res.error) {
            this.errorTitle = res.message;
            this.displayStatus = 1;
            console.log(res);
            this.loading = false;
          }
          this.tableDataTabs.push({time: new Date(), data: res});
          this.loading = false;
        },
        err => {
          this.error = err;
          this.loading = false;
          console.log(err)});
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
