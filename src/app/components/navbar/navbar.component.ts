import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',


  imports: [
    NgClass
  ]
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  @ViewChild('mobileMenu') mobileMenuRef!: ElementRef;

  toggleMobileMenu(event: Event) {
    event.stopPropagation();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const clickedInside = this.mobileMenuRef?.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.closeMobileMenu();
    }
  }
}
