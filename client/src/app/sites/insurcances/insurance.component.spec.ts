import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceComponent } from './insurance.component';

describe('InsurcancesComponent', () => {
  let component: InsuranceComponent;
  let fixture: ComponentFixture<InsuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceComponent]
    });
    fixture = TestBed.createComponent(InsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
