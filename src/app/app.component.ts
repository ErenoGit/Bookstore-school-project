import { Component, OnInit } from '@angular/core';
import { InitialDataService } from './src/app/_services/initial-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ksiegarnia';

  constructor(
    private initialDataService: InitialDataService
  ) {

  }

  ngOnInit(): void {
    this.initialDataService.loadAppData();
  }
}
