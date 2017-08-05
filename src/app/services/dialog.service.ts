import { Observable } from 'rxjs/Rx';
import { PopupComponent } from '../components/options-popup/options-popup.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {

    let dialogRef: MdDialogRef<PopupComponent>;

    dialogRef = this.dialog.open(PopupComponent);
    // dialogRef.componentInstance.title = title;
    // dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
