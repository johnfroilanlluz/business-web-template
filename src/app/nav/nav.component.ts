import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  sideNavRight: string = '-250px';
  ImagePath: string = '../../assets/images/menu.png';

  toggleSideNav() {
    this.sideNavRight = this.sideNavRight === '-250px' ? '0' : '-250px';
    this.ImagePath =
      this.sideNavRight === '0'
        ? '../../assets/images/close.png'
        : '../../assets/images/menu.png';
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
