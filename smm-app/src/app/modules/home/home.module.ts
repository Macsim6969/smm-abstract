import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from '../../shared/share.module';
import { BannerModule } from '../banner/banner.module';
import { DescriptionsModule } from '../descriptions/descriptions.module';
import { ModernModule } from '../modern/modern.module';
import { AboutUsModule } from '../about-us/about-us.module';
import { PricingModule } from '../pricing/pricing.module';
import { StartAppModule } from '../start-app/start-app.module';
import { FooterModule } from '../footer/footer.module';


const routes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BannerModule,
    DescriptionsModule,
    ModernModule,
    AboutUsModule,
    PricingModule,
    StartAppModule,
    FooterModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ShareModule
  ]
})
export class HomeModule { }
