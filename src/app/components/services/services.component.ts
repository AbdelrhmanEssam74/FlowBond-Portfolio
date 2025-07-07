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
export class ServicesComponent  implements AfterViewInit {

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
      const threshold = 150; // Pixels from the bottom of the viewport
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const shouldBeVisible = (rect.top <= viewportHeight - threshold) && (rect.bottom >= 0);

      if (shouldBeVisible && !this.isVisible) {
        this.isVisible = true;
        console.log("servicesTitleAnimation isVisible to true");
      } else if (!shouldBeVisible && this.isVisible) {
        this.isVisible = false;
        console.log("servicesTitleAnimation isVisible to false");
      }
    } else {
      console.warn("servicesTitleAnimation element not found in DOM yet or is null.");
    }
  }
}
