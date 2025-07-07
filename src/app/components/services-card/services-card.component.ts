import {Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceCard} from '../../interfaces/service-card';
import {fadeInUpOnEnterAnimation, fadeOutOnLeaveAnimation} from 'angular-animations';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.css',
  animations: [
    fadeInUpOnEnterAnimation({duration: 1000, delay: 0}),
    fadeOutOnLeaveAnimation({duration: 1000, delay: 0})
  ]
})
export class ServicesCardComponent implements AfterViewInit {
  // services cards
  serviceCards: ServiceCard[] = [
    {
      id: "2ba727d1-ccc3-54d4-951c-79ba43710e0e",
      index: 1,
      class: "services-item _01",
      image: "https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67f89afdadf0a55f3b2c11ca_Shape.svg",
      title: "UI/UX Design",
      paragraph: "Crafting seamless, user-friendly digital products with a perfect balance of aesthetics and functionality.",
      listItems: [
        "Wireframe and Prototyping",
        "Interaction Design",
        "Usability Testing &amp; User Research",
        "Visual Design &amp; UI Enhancements",
        "User-Centered Design"
      ]
    },
    {
      id: "62c4f885-0c4e-abdd-ac66-a43c9e8ac043",
      index: 2,
      class: "services-item _02",
      image: "https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67f89afdadf0a55f3b2c11ca_Shape.svg",
      title: "Web Development",
      paragraph: "Building websites optimized for all devices, from desktop to mobile. Ongoing support and updates to ensure.",
      listItems: [
        "Html / Css / Webflow",
        "Responsive &amp; Mobile-Friendly Websites",
        "CMS Development &amp; Integration",
        "Performance Optimization",
        "Website Maintenance &amp; Support"
      ]
    },
    {
      id: "df484e99-25c7-35ab-a1bb-55eff3b4ed33",
      index: 3,
      class: "services-item _03",
      image: "https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67f89afdadf0a55f3b2c11ca_Shape.svg",
      title: "Digital Marketing",
      paragraph: "Optimizing your website and content to rank higher on search engines and attract organic traffic.",
      listItems: [
        "Social Media Marketing",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing",
        "Conversion Rate Optimization (CRO)",
        "Influencer &amp; Affiliate Marketing"
      ]
    }
  ];

  @ViewChild('servicesCardsAnimation') servicesCardsAnimation!: ElementRef;
  isVisible: boolean = false;

  ngAfterViewInit() {
    // 💡 Issue 2 Fix: Call the function with ()
    this.scrollCheck();
  }

  @HostListener('window:scroll', [])
  scrollCheck() {
    if (this.servicesCardsAnimation && this.servicesCardsAnimation.nativeElement) {
      const element = this.servicesCardsAnimation.nativeElement;
      const rect = element.getBoundingClientRect();
      // 💡 Adjusted threshold: This is the distance from the bottom of the viewport
      // at which the element's *top* should be to trigger the animation.
      const triggerOffsetFromViewportBottom = 150; // Example: 150px from the bottom

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      // Calculate the trigger point relative to the viewport's top (e.g., 800 - 150 = 650px from top)
      const triggerPoint = viewportHeight - triggerOffsetFromViewportBottom;

      console.log(`Viewport Height: ${viewportHeight}`);
      console.log(`Element Top: ${rect.top}, Element Bottom: ${rect.bottom}`);
      console.log(`Trigger Point (Viewport Top to initiate visibility): ${triggerPoint}`);

      // 💡 Corrected logic for shouldBeVisible
      // Element should be visible if its top edge has moved *above* the trigger point
      // AND its bottom edge is still within the viewport (not scrolled past the top).
      const shouldBeVisible = (rect.top <= triggerPoint) && (rect.bottom >= 0);

      if (shouldBeVisible && !this.isVisible) {
        this.isVisible = true;
        console.log("Setting isVisible to true (cards)");
      } else if (!shouldBeVisible && this.isVisible) {
        this.isVisible = false;
        console.log("Setting isVisible to false (cards)");
      }
    } else {
      console.warn("servicesCardsAnimation element not found in DOM yet or is null.");
    }
  }
}
