import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ShareModule } from "../../shared/share.module";
import { HeaderIconService } from "./@shared/services/headerIcon.service";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShareModule
  ],
  providers: [HeaderIconService]

})

export class HeaderModule { }