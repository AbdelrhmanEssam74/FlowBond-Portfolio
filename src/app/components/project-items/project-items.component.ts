import {Component} from '@angular/core';
import {ServiceCard} from '../../interfaces/service-card';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-project-items',
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './project-items.component.html',
  styleUrl: './project-items.component.css'
})
export class ProjectItemsComponent {
  projects = [
    {
      title: 'FlowBond',
      description: 'Understanding the principles of user experience design.',
      image: 'https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67fea7b44f021f2124ed6345_67671ffce55be10dc11ab6e5_image%2026%20(3).jpg',
      tags: [
        {
          class: 'project-tag _01',
          title: 'UI/UX DESIGN',

        },
        {
          class: 'project-tag _02',
          title: 'WEB DEVELOPMENT'
        },
        {
          class: 'project-tag _03',
          title: 'INTERECTION',
        },
        {
          class: 'project-tag _04',
          title: 'WEBSITE'
        }
      ]
    },
    {
      title: 'Admin Dashboard',
      description: 'Create, update, and manage platform content. Customize system preferences, API keys.',
      image: 'https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67fea7e40301332113cde57f_6767200edb2a6346272728f6_image%2034.jpg',
      tags: [
        {
          class: 'project-tag _01',
          title: 'UI/UX DESIGN',

        },
        {
          class: 'project-tag _02',
          title: 'WEB DEVELOPMENT'
        },
        {
          class: 'project-tag _03',
          title: 'INTERECTION',
        },
        {
          class: 'project-tag _04',
          title: 'WEBSITE'
        }
      ]
    },
    {
      title: 'FlowBites Branding',
      description: 'Design & development agency full brand identity design & marketing.',
      image: 'https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67fea800132ec2962f06b423_67671ff3745f6cfaac61ce9d_image%2028.jpg',
      tags: [
        {
          class: 'project-tag _01',
          title: 'UI/UX DESIGN',

        },
        {
          class: 'project-tag _02',
          title: 'WEB DEVELOPMENT'
        },
        {
          class: 'project-tag _03',
          title: 'INTERECTION',
        },
        {
          class: 'project-tag _04',
          title: 'WEBSITE'
        }
      ]
    }
  ];
}
