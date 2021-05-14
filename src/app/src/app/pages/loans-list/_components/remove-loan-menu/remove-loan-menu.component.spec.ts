import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLoanMenuComponent } from './remove-loan-menu.component';

describe('RemoveLoanMenuComponent', () => {
  let component: RemoveLoanMenuComponent;
  let fixture: ComponentFixture<RemoveLoanMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveLoanMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveLoanMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
