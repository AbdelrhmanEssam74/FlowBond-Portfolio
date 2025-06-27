import { Component, OnInit } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-clients',
  imports: [
    NgForOf
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
  standalone: true
})
export class ClientsComponent implements OnInit {
  clients = [
    { index : "item1", src: 'assets/images/clients/client1.png', alt: 'Client 1' },
    { index : "item2", src: 'assets/images/clients/client2.png', alt: 'Client 2' },
    { index : "item3", src: 'assets/images/clients/client3.png', alt: 'Client 3' },
    { index : "item4", src: 'assets/images/clients/client4.png', alt: 'Client 4' },
    { index : "item5", src: 'assets/images/clients/client5.png', alt: 'Client 5' },
    { index : "item6", src: 'assets/images/clients/client6.png', alt: 'Client 6' }
]
  ngOnInit() {
    this.calculateDelays();
  }

  calculateDelays() {
    const totalItems = this.clients.length;
    const desktopDuration = 15; // seconds
    const mobileDuration = 10; // seconds

    this.clients.forEach((client, index) => {
      const delay = (desktopDuration / totalItems) * index;
      const mobileDelay = (mobileDuration / totalItems) * index;

      // You could store these values for dynamic manipulation if needed
    });
  }
}
