import { Component } from '@angular/core';
import {HerosectionComponent} from '../herosection/herosection.component';
import {ClientsComponent} from '../clients/clients.component';
import {CareerJourneyComponent} from '../career-journey/career-journey.component';
import {ServicesComponent} from '../services/services.component';

@Component({
  selector: 'app-home',
  imports: [
    HerosectionComponent,
    ClientsComponent,
    CareerJourneyComponent,
    ServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
