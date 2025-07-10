import {
  Component,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceCard} from '../../interfaces/service-card';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.css',
})
export class ServicesCardComponent {
  serviceCards: ServiceCard[] = [
    {
      id: '2ba727d1-ccc3-54d4-951c-79ba43710e0e',
      index: 0,
      class: 'services-item _01',
      image: 'https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67f89afdadf0a55f3b2c11ca_Shape.svg',
      title: 'UI/UX Design',
      paragraph: 'Crafting seamless, user-friendly digital products with a perfect balance of aesthetics and functionality.',
      listItems: [
        'Wireframe and Prototyping',
        'Interaction Design',
        'Usability Testing & User Research',
        'Visual Design & UI Enhancements',
        'User-Centered Design'
      ]
    },
    {
      id: '62c4f885-0c4e-abdd-ac66-a43c9e8ac043',
      index: 2,
      class: 'services-item _02',
      image: 'https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67f89afdadf0a55f3b2c11ca_Shape.svg',
      title: 'Web Development',
      paragraph: 'Building websites optimized for all devices, from desktop to mobile. Ongoing support and updates to ensure.',
      listItems: [
        'Html / Css / Webflow',
        'Responsive & Mobile-Friendly Websites',
        'CMS Development & Integration',
        'Performance Optimization',
        'Website Maintenance & Support'
      ]
    },
    {
      id: 'df484e99-25c7-35ab-a1bb-55eff3b4ed33',
      index: 3,
      class: 'services-item _03',
      image: 'https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67f89afdadf0a55f3b2c11ca_Shape.svg',
      title: 'Digital Marketing',
      paragraph: 'Optimizing your website and content to rank higher on search engines and attract organic traffic.',
      listItems: [
        'Social Media Marketing',
        'Pay-Per-Click (PPC) Advertising',
        'Content Marketing',
        'Conversion Rate Optimization (CRO)',
        'Influencer & Affiliate Marketing'
      ]
    }
  ];
}
