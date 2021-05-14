import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBookModalComponent } from './remove-book-modal.component';

describe('RemoveBookModalComponent', () => {
  let component: RemoveBookModalComponent;
  let fixture: ComponentFixture<RemoveBookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveBookModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
