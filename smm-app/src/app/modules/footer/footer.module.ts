import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../../shared/share.module";
import { FooterComponent } from "./footer.component";
import { FooterIconService } from "./@shared/services/footerIcon.service";

@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  providers: [FooterIconService]
})

export class FooterModule { }