import { Component, OnDestroy, OnInit } from '@angular/core';
import { DescriptionsIconService } from './@shared/services/descriptionsIcon.service';
import { TranslateService } from '@ngx-translate/core';
import { Descriptions } from './@shared/interface/descriptions.interface';
import { Subscription } from 'rxjs';
import { GlobalIconService } from '../../services/globalIcon.service';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrl: './descriptions.component.scss'
})
export class DescriptionsComponent implements OnInit, OnDestroy {
  public descriptionsData: Descriptions[];
  public activeCard: number = 2;
  private descriptionsDataSubscriptions: Subscription;
  constructor(
    private descriptionsIcon: DescriptionsIconService,
    private globalIcon: GlobalIconService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.initializeDescriptionsDataFromJson();
  }

  private initializeDescriptionsDataFromJson() {
    this.descriptionsDataSubscriptions = this.translate.stream('descriptions').subscribe((data: Descriptions[]) => {
      this.descriptionsData = data;
    })
  }

  public choiceCard(index: number) {
    this.activeCard = index;
  }
  ngOnDestroy(): void {
    this.descriptionsDataSubscriptions.unsubscribe();
  }
}
