import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCardComponent } from './insurance-card.component';

describe('InsurcanceCardComponent', () => {
  let component: InsuranceCardComponent;
  let fixture: ComponentFixture<InsuranceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceCardComponent]
    });
    fixture = TestBed.createComponent(InsuranceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
