import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/reducer';

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {
  isLoaderActive = false;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store
      .pipe(select('globalReducer'))
      .subscribe(state => {
        this.isLoaderActive = state.isLoaderActive;
      });
  }

}
