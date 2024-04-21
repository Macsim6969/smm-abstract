import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner.component";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../../shared/share.module";
import { HeaderModule } from "../header/header.module";

@NgModule({
  declarations: [BannerComponent],
  exports: [BannerComponent],
  imports: [CommonModule, ShareModule, HeaderModule]
})

export class BannerModule { }