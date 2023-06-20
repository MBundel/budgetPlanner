import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowcardComponent } from './cashflowcard.component';

describe('CashflowcardComponent', () => {
  let component: CashflowcardComponent;
  let fixture: ComponentFixture<CashflowcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashflowcardComponent]
    });
    fixture = TestBed.createComponent(CashflowcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
