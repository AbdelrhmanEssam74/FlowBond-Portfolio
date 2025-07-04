import {Component, Input} from '@angular/core';
import {AnimatedBtnComponent} from '../buttons/animated-btn/animated-btn.component';

@Component({
  selector: 'app-career-journey',
  templateUrl: './career-journey.component.html',
  imports: [
    AnimatedBtnComponent
  ],
  styleUrls: ['./career-journey.component.css']
})
export class CareerJourneyComponent  {
  @Input() buttonText: string = 'Start A Conversation';
  @Input() buttonAfterContent: string = 'Start A Conversation';
}
