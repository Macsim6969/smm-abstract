import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CardsPrice, Pricing } from './@shared/interface/pricing.interface';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit, OnDestroy {

  public cardsPrices: CardsPrice[];
  public pricingHeader: string;
  public pricingDescription: string;
  private translateSubscription: Subscription;
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.initializePricingContentFromJson();
  }

  private initializePricingContentFromJson() {
    this.translateSubscription = this.translate.stream('pricing').subscribe((data: Pricing) => {
      this.pricingHeader = data.title;
      this.pricingDescription = data.description;
      this.cardsPrices = data.cardsPrice;
    })
  }

  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }
}
