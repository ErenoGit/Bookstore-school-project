import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListMenuComponent } from './users-list-menu.component';

describe('UsersListMenuComponent', () => {
  let component: UsersListMenuComponent;
  let fixture: ComponentFixture<UsersListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
