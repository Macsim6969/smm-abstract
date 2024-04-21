import { Component, Input } from '@angular/core';
import { AboutUsComments } from '../../interface/about-us.interface';
import { GlobalIconService } from '../../../../../services/globalIcon.service';

@Component({
  selector: 'app-comments',

  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  @Input() comment: AboutUsComments;
  public stars: [1, 2, 3, 4, 5]

  constructor(
    private globalIcon: GlobalIconService
  ){}

}
