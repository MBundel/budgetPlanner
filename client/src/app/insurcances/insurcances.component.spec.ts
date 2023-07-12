import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurcancesComponent } from './insurcances.component';

describe('InsurcancesComponent', () => {
  let component: InsurcancesComponent;
  let fixture: ComponentFixture<InsurcancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsurcancesComponent]
    });
    fixture = TestBed.createComponent(InsurcancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
