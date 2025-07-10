import {Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {ServicesCardComponent} from '../services-card/services-card.component';
import {CommonModule} from '@angular/common';
import {fadeInUpOnEnterAnimation, fadeOutOnLeaveAnimation} from 'angular-animations';

@Component({
  selector: 'app-services',
  imports: [
    ServicesCardComponent,
    CommonModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  animations: [
    fadeInUpOnEnterAnimation({duration: 1000, delay: 0}),
    fadeOutOnLeaveAnimation({duration: 1000, delay: 0})
  ]
})
export class ServicesComponent implements AfterViewInit {

  @ViewChild('servicesTitleAnimation') servicesTitleAnimation!: ElementRef;
  isVisible: boolean = false;
  ngAfterViewInit() {
    this.scrollTitleCheck();
  }

  @HostListener('window:scroll', [])
  scrollTitleCheck() {
    if (this.servicesTitleAnimation && this.servicesTitleAnimation.nativeElement) {
      const element = this.servicesTitleAnimation.nativeElement;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const shouldBeVisible = (rect.top < viewportHeight - 100) && (rect.bottom > 0);
      if (shouldBeVisible && !this.isVisible) {
        this.isVisible = true;

      } else if (!shouldBeVisible && this.isVisible) {
        this.isVisible = false;
      }
      console.log(this.isVisible)
    } else {
      console.warn("servicesTitleAnimation element not found in DOM yet or is null.");
    }
  }
}
