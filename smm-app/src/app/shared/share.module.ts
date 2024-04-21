import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    TranslateModule,
    MatIcon,
    MatCard,
    MatButton,
    MatLabel,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconButton,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput
  ],
  exports: [
    MatIconModule,
    TranslateModule,
    MatIcon,
    MatCard,
    MatButton,
    MatLabel,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconButton,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput
  ]
})

export class ShareModule { }