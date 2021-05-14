import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLoanTableComponent } from './remove-loan-table.component';

describe('RemoveLoanTableComponent', () => {
  let component: RemoveLoanTableComponent;
  let fixture: ComponentFixture<RemoveLoanTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveLoanTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveLoanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
