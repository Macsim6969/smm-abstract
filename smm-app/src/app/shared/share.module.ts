import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    TranslateModule
  ],
  exports: [
    MatIconModule,
    TranslateModule
  ]
})

export class ShareModule { }