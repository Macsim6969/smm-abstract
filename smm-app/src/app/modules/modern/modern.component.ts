import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModernSave } from './@shared/interface/modern.interface';
import { Subscription } from 'rxjs';
import { GlobalIconService } from '../../services/globalIcon.service';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  styleUrl: './modern.component.scss'
})
export class ModernComponent implements OnInit, OnDestroy {
  public modern: ModernSave;
  public save: ModernSave

  private translateSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private globalIcon: GlobalIconService
  ) { }

  ngOnInit(): void {
    this.streamModernDataFromStore();
    this.streamSaveDataFromStore();
  }

  private streamModernDataFromStore() {
    this.translateSubscription = this.translate.stream('modern').subscribe((data: ModernSave) => {
      this.modern = data;
    })
  }

  private streamSaveDataFromStore() {
    this.translateSubscription = this.translate.stream('save').subscribe((data: ModernSave) => {
      this.save = data;
    })
  }

  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }
}
