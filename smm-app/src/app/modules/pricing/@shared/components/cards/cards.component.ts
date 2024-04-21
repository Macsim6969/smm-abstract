import { Component, Input } from '@angular/core';
import { CardsPrice } from '../../interface/pricing.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() card: CardsPrice;
}
