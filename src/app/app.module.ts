import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { DataService } from './services/data.service';
import { DataTestService } from './services/data-test.service';
import { DialogService } from './services/dialog.service';

import {
  MdGridListModule,
  MdCardModule,
  MdMenuModule,
  MdButtonModule,
  MdDatepickerModule,
  MdInputModule,
  MdNativeDateModule,
  MdSelectModule,
  MdTableModule,
  MdTabsModule,
  MdPaginatorModule,
  MdIconModule,
  MdDialogModule,
  MdTooltipModule,
  MdToolbarModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TableComponent } from './components/table/table.component';
import { PopupComponent } from './components/options-popup/options-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdGridListModule,
    MdCardModule,
    MdMenuModule,
    MdButtonModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule,
    MdSelectModule,
    MdTableModule,
    MdTabsModule,
    MdPaginatorModule,
    CdkTableModule,
    MdIconModule,
    MdDialogModule,
    MdTooltipModule,
    MdToolbarModule,
    FormsModule,
    HttpModule
  ],

  entryComponents: [PopupComponent],
  providers: [DataService, DialogService, DataTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
