import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { StartApp } from './@shared/interface/start-app.interface';

@Component({
  selector: 'app-start-app',
  templateUrl: './start-app.component.html',
  styleUrl: './start-app.component.scss'
})
export class StartAppComponent implements OnInit, OnDestroy {

  public startApp: StartApp;
  private translateSubscription: Subscription;
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.initializeStartAppFromJson();
  }

  private initializeStartAppFromJson() {
    this.translateSubscription = this.translate.stream('startApp').subscribe((data: StartApp) => {
      this.startApp = data;
      console
    })
  }

  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }
}
