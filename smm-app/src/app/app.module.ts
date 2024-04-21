import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ShareModule } from './shared/share.module';
import { StoreService } from './services/store.service';
import { GlobalIconService } from './services/globalIcon.service';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ShareModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    StoreService,
    GlobalIconService
  ]
})

export class AppModule {
}
