import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { mountRootParcel } from 'single-spa';
declare const System;

const remoteImport = async url => await System.import(url);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  config = System.import('@ng-mfe/app-parcel')
  mountRootParcel = mountRootParcel 
}
