import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isDropdownOpen: boolean = false;

  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

    constructor() {}
  isScrolled: boolean = false;
  public isMenuOpen: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Update the isScrolled property based on scroll position
    this.isScrolled = window.scrollY > 0;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  menuToggle() {
    return this.isMenuOpen;
  }
  ngOnInit(): void {}
}

