import { NgModule } from "@angular/core";
import { ModernComponent } from "./modern.component";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../../shared/share.module";

@NgModule({
  declarations: [
    ModernComponent
  ],
  exports: [
    ModernComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})

export class ModernModule{}