import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Injectable()

export class DescriptionsIconService {
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('pen', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/descriptions/pen.svg'));
    this.matIconRegistry.addSvgIcon('time', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/descriptions/time.svg'));
    this.matIconRegistry.addSvgIcon('love', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/descriptions/love.svg'));
  }
}