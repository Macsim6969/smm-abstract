import { TranslateService } from '@ngx-translate/core';
import { GlobalIconService } from './../../services/globalIcon.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterIconService } from './@shared/services/footerIcon.service';
import { Footer } from './@shared/interface/footer.inteface';
import { Observable, Subscription } from 'rxjs';
import { Lang, StoreService } from '../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {

  public langArray: Lang[];
  public footer: Footer;
  public language$: Observable<string>;
  public isDropdown: boolean = false;
  private translateSubscription: Subscription;
  constructor(
    private translate: TranslateService,
    private footerIcon: FooterIconService,
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeStartAppFromJson();
    this.getLangDataFromStore();
    this.language$ = this.store._language$;
  }

  private initializeStartAppFromJson() {
    this.translateSubscription = this.translate.stream('footer').subscribe((data: Footer) => {
      this.footer = data;
      console
    })
  }

  private getLangDataFromStore() {
    this.langArray = this.store._langArray;
  }

  public openTab() {
    this.isDropdown = !this.isDropdown;
  }

  public choiceLang(hl: string, country: string) {
    this.store._lang = hl;
    this.router.navigate([], {queryParams: {hl: hl, country: country},queryParamsHandling: 'merge'})
  }
  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }
}