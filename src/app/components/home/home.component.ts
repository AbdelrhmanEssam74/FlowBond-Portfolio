import { Component } from '@angular/core';
import {HerosectionComponent} from '../herosection/herosection.component';
import {ClientsComponent} from '../clients/clients.component';

@Component({
  selector: 'app-home',
  imports: [
    HerosectionComponent,
    ClientsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
