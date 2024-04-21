import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DescriptionsComponent } from "./descriptions.component";
import { ShareModule } from "../../shared/share.module";
import { DescriptionsIconService } from "./@shared/services/descriptionsIcon.service";


@NgModule({
  declarations: [
    DescriptionsComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    DescriptionsComponent
  ],
  providers: [DescriptionsIconService]
})

export class DescriptionsModule { }