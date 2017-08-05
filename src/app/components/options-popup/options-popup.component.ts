import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'popup',
  templateUrl: 'options-popup.component.html',
})
export class PopupComponent {
  apiKeyForm = new FormControl();
  currentApiForm = new FormControl('Select API');
  apis = [
    {
      id: 0,
      title: 'Select API',
      value: 'select api'
    }, {
      id: 1,
      title:'apifootbal',
      value: 'https://apifootball.com/api/?action='
    }, {
      id: 2,
      title: 'example api',
      value: 'example'
    }];
  intervals = [5, 10, 15, 30, 60];
  displayStatus: number;
  constructor(public dialogRef: MdDialogRef<PopupComponent>) {}
}
