import {Component, ElementRef, HostListener, Output, ViewChild} from '@angular/core';
import {NgClass} from '@angular/common';
import {AnimatedBtnComponent} from '../buttons/animated-btn/animated-btn.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',


  imports: [
    NgClass,
    AnimatedBtnComponent
  ]
})
export class NavbarComponent {
  isMobileMenuOpen = false;


  @Output() buttonText: string = 'Contact Now';
  @Output() buttonAfterContent: string = 'Contact Now';

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
