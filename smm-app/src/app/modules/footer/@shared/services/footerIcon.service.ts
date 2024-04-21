import { MatIconRegistry } from '@angular/material/icon';
import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";


@Injectable()

export class FooterIconService {
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('logo_footer', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/footer/logo_footer.svg'));
    this.matIconRegistry.addSvgIcon('lang', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/footer/lang.svg'));
    this.matIconRegistry.addSvgIcon('arrow_down', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/footer/arrow_down.svg'));
  }
}