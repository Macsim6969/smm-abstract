import { DragScrollModule } from 'ngx-drag-scroll';

import { NgModule } from "@angular/core";
import { AboutUsComponent } from "./about-us.component";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../../shared/share.module";
import { CommentsComponent } from "./@shared/components/comments/comments.component";

@NgModule({
  declarations: [
    AboutUsComponent,
    CommentsComponent
  ],
  exports: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    DragScrollModule
  ]
})

export class AboutUsModule{}