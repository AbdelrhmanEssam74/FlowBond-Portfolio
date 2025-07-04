import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-btn',
  imports: [],
  templateUrl: './animated-btn.component.html',
  styleUrls: ['./animated-btn.component.css']
})
export class AnimatedBtnComponent  {
  @Input() text: string = '';
  @Input() afterContent: string = '';
}
