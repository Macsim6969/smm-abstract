import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Injectable()

export class GlobalIconService {
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('arrow', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/global/arrow.svg'));

  }
}