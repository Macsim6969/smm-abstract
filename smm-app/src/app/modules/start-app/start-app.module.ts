import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../../shared/share.module";
import { StartAppComponent } from "./start-app.component";

@NgModule({
  declarations: [
    StartAppComponent
  ],
  exports: [
    StartAppComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})

export class StartAppModule { }