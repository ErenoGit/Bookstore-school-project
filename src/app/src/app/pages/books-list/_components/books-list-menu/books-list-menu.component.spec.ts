import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListMenuComponent } from './books-list-menu.component';

describe('BooksListMenuComponent', () => {
  let component: BooksListMenuComponent;
  let fixture: ComponentFixture<BooksListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
