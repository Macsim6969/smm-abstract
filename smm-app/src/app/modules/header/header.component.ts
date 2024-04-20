import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderIconService } from './@shared/services/headerIcon.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MenuNavigation } from './@shared/interface/menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private translateSubscription: Subscription;
  public menuNavigation: MenuNavigation[];

  constructor(
    private headerIcon: HeaderIconService,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.stream('header.headerMenu').subscribe((data: MenuNavigation[]) => {
      this.menuNavigation = data;
    })
  }

  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }

}
