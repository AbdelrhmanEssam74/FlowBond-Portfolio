import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  fqaData = [
    {
      question: 'What services do you offer?',
      answer: 'When you first start reading, it takes a second to realize his wife\n' +
        'has passed away. I thought this was so well done, &nbsp;because at first he’s talking to her all the time',
      visible: false
    },
    {
      question: ' How many revisions do I get?',
      answer: 'When you first start reading, it takes a second to realize his wife\n' +
        '          has passed away. I thought this was so well done, &nbsp;because at first he’s talking to her all the time',
      visible: false
    },
    {
      question: ' How much do your design services cost?',
      answer: 'When you first start reading, it takes a second to realize his wife\n' +
        '          has passed away. I thought this was so well done, &nbsp;because at first he’s talking to her all the time',
      visible: false
    },
    {
      question: 'How do I get started with a design project?',
      answer: 'When you first start reading, it takes a second to realize his wife has passed away. I thought this was so well done,  because at first he’s talking to her all the time',
      visible: false
    },
    {
      question: 'How long does a design project take?',
      answer: 'When you first start reading, it takes a second to realize his wife has passed away. I thought this was so well done,  because at first he’s talking to her all the time',
      visible: false
    },
  ]

  toggleFaq(index: number): void {
    this.fqaData[index].visible = !this.fqaData[index].visible;
    // Hide other FAQs when one is opened
    this.fqaData.forEach((faq , i)=>{
      if (i !== index) (
        this.fqaData[i].visible = false
      )
    })
  }

}
