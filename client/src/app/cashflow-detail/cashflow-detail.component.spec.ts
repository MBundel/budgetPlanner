import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowDetailComponent } from './cashflow-detail.component';

describe('CashflowDetailComponent', () => {
  let component: CashflowDetailComponent;
  let fixture: ComponentFixture<CashflowDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashflowDetailComponent]
    });
    fixture = TestBed.createComponent(CashflowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
