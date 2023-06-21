import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowCardComponent } from './cashflow-card.component';

describe('CashflowCardComponent', () => {
  let component: CashflowCardComponent;
  let fixture: ComponentFixture<CashflowCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashflowCardComponent]
    });
    fixture = TestBed.createComponent(CashflowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
