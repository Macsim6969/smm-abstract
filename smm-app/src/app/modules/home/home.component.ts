import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  private langSubscription: Subscription;
  constructor(
    private store: StoreService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.langSubscription = this.store._lang$.subscribe((lang: string) => {
      this.translate.use(lang);
    })
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }
}


