import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AboutUs, AboutUsComments } from './@shared/interface/about-us.interface';
import { GlobalIconService } from '../../services/globalIcon.service';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
  public title: string;
  public comments: AboutUsComments[];
  public activeCard: number = 2;
  public isRight: boolean;
  public isLeft: boolean;
  private aboutUsSubscription: Subscription;
  constructor(
    private translate: TranslateService,
    private globalIcon: GlobalIconService
  ) { }

  ngOnInit(): void {
    this.initializeAboutUsDataFromJson();
  }
  ngAfterViewInit(): void {
    this.initializeScrollStream();
  }

  private initializeAboutUsDataFromJson() {
    this.translate.stream('about').subscribe((data: AboutUs) => {
      this.title = data.titleHeader;
      this.comments = data.comments;
    })
  }

  private initializeScrollStream() {
    const navElement: HTMLElement = document.querySelector('.about_slier .drag-scroll-content');

    navElement.addEventListener('scroll', () => {
      this.updateButtonStates();
    });
  }

  public choiceCard(i){
    this.activeCard = i;
    this.ds.moveTo(i)
  }

  public right() {
    this.ds.moveRight()
    this.activeCard++;
    this.updateButtonStates();
  }

  public left() {
    this.ds.moveLeft()
    this.activeCard--;
    this.updateButtonStates();
  }

  private updateButtonStates() {
    const navElement: HTMLElement = document.querySelector('.about_slier .drag-scroll-content');
    const scrollPosition = navElement.scrollLeft;
    const containerWidth = navElement.offsetWidth;
    const scrollWidth = navElement.scrollWidth - 5;

    this.isLeft = scrollPosition === 0;
    this.isRight = scrollPosition + containerWidth >= scrollWidth;
  }

  ngOnDestroy(): void {
    this.aboutUsSubscription.unsubscribe();
  }
}
