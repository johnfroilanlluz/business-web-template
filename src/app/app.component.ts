import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'VividTrim-Studios';

  sideNavRight: string = '-250px';
  ImagePath: string = '../../assets/images/menu.png';

  toggleSideNav() {
    this.sideNavRight = this.sideNavRight === '-250px' ? '0' : '-250px';
    this.ImagePath =
      this.sideNavRight === '0'
        ? '../../assets/images/close.png'
        : '../../assets/images/menu.png';
  }

  

  ngOnInit() {
    this.setupSmoothScroll();
  }

  private setupSmoothScroll() {
    document.addEventListener('DOMContentLoaded', () => {
      // Select all links with the class "smooth-scroll"
      const links = document.querySelectorAll('a.smooth-scroll');

      // Attach a click event listener to each link
      links.forEach(link => {
        link.addEventListener('click', (e: Event) => {
          e.preventDefault(); // Prevent default anchor behavior

          // Get the target section's ID from the link's href attribute
          const targetId = (link as HTMLAnchorElement)?.getAttribute('href')?.substring(1);
          const targetSection = targetId ? document.getElementById(targetId) : null;

          // Scroll to the target section smoothly
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    });
  }
}
