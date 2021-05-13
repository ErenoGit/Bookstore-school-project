import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { appPages } from '../../models/app-models';

@Component({
  selector: 'app-navbar',
  templateUrl: './application-navbar.component.html',
  styleUrls: ['./application-navbar.component.scss']
})
export class ApplicationNavbarComponent implements OnInit {
  currentRoute: string;
  appPages = appPages;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd) this.currentRoute = event.url.substring(1);
     });
  }

  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}
