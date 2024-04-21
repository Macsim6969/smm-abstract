import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Lang, StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.initializeRouteEvents();
    this.initializeRouteQueryParams();
  }

  private initializeRouteEvents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        if (url.startsWith('/') && url.indexOf('?') === -1) {
          this.checkDefaultQueryParams()
        }
      }
    });
  }

  private initializeRouteQueryParams() {
    this.route.queryParams.subscribe((params) => {
      if (params['hl']) {
        const paramsLocal: Lang = this.store._langArray.find((data) => data.hl === params['hl'])
        console.log(params)
        this.translate.use(params['hl']);
        this.router.navigate([], { queryParams: { hl: params['hl'], country: paramsLocal.country }, queryParamsHandling: 'merge' }).then();
        this.store._lang = params['hl'];
        this.store._country = paramsLocal.country;
        this.store._language = paramsLocal.language;
      }
    })
  }

  private checkDefaultQueryParams() {
    const currentParams = this.router.routerState.snapshot.root.queryParams;
    if (!currentParams['hl'] || !currentParams['country']) {
      const defaultParams = {
        hl: 'en',
        country: 'US'
      };
      this.router.navigate([], {
        queryParams: defaultParams
      });
    }
  }
}
