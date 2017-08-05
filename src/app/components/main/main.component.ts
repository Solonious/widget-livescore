import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { PopupComponent } from '../options-popup/options-popup.component';

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
  constructor(public dialog: MdDialog) { }

  ngOnInit() {
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
