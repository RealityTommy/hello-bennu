import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'story-risk-to-earth',
  templateUrl: './risk-to-earth.component.html'
})
export class RiskToEarthComponent {
  public bennuX: number;
  public bennuY: number;

  @HostListener('window:scroll', ['$event'])
    scrollPage(event) {
      if (window.screen.width >= 860) {
        this.bennuX = ((window.pageYOffset * 10) / 20) - 800;
        this.bennuY = ((window.pageYOffset * 4) / 20) - 150;
      } else {
        this.bennuX = ((window.pageYOffset * 3) / 20) - 250;
        this.bennuY = ((window.pageYOffset * 3) / 20) + 300;
      }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.scrollPage(event);
  }
}
