import { Component } from '@angular/core';
import {HerosectionComponent} from '../herosection/herosection.component';
import {ClientsComponent} from '../clients/clients.component';
import {CareerJourneyComponent} from '../career-journey/career-journey.component';
import {ServicesComponent} from '../services/services.component';
import {ProjectsComponent} from '../projects/projects.component';
import {ReviewsComponent} from '../reviews/reviews.component';
import {FaqComponent} from '../faq/faq.component';
import {ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    HerosectionComponent,
    ClientsComponent,
    CareerJourneyComponent,
    ServicesComponent,
    ProjectsComponent,
    ReviewsComponent,
    FaqComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
