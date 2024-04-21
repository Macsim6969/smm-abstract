import { NgModule } from "@angular/core";
import { PricingComponent } from "./pricing.component";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../../shared/share.module";
import { CardsComponent } from "./@shared/components/cards/cards.component";

@NgModule({
  declarations: [
    PricingComponent,
    CardsComponent
  ],
  exports: [
    PricingComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})

export class PricingModule { }