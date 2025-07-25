import {
  Component,
} from '@angular/core';
import { Testimonial } from '../../interfaces/testimonial';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  imports: [
    NgFor
  ]
})
export class ReviewsComponent {
  testimonials: Testimonial[] = [
    {
      image: 'https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67f6bf051c6a09a08dfcd31f_images%20(1).webp',
      clientName: 'Omor Rahman',
      clientTitle: 'Marketing Manager at FlowBites',
      comment: `James's deep understanding of user experience and his creative approach to design helped us elevate our product to new heights.`,
      client_name_class : 'client-name _01'
    },
    {
      image: 'https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67f6bf02fbbc9395de128f67_images-p-800.webp',
      clientName: 'Jahid Hasan',
      clientTitle: 'Marketing Officer at FlowBites',
      comment: `Working with James Bond was a best pleasure; he consistently to work delivered high-quality work the within deadlines. His designs not only met our expectations but is exceeded them, making a nice to significant impact on our project's success.`,
      client_name_class : 'client-name _02'
    },
    {
      image: 'https://cdn.prod.website-files.com/67f54cce5ff458fdb00dfabe/67f6bf00cec6828f0c1513da_image-p-800.webp ',
      clientName: 'Abdur Rahman',
      clientTitle: 'Project Manager at FlowBites',
      comment: `James's deep understanding of user experience and his creative approach to design helped us elevate our product to new heights. His attention to detail and ability to translate complex ideas into intuitive designs are truly remarkable.`,
      client_name_class : 'client-name _03'
    }
  ];


}
