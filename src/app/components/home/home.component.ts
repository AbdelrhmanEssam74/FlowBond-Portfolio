import { Component } from '@angular/core';
import {HerosectionComponent} from '../herosection/herosection.component';

@Component({
  selector: 'app-home',
  imports: [
    HerosectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
