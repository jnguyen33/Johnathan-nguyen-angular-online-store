import { Component } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-online-store';

  constructor(
    // private router: Router
  ) {
    //   this.router.events.subscribe((event) => {
    //     if (event instanceof NavigationEnd) {
    //       window.scrollTo(0, 0);
    //     }
    //   });
    // }
  };
};