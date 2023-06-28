import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalPlannerComponent } from './goal-planner.component';

describe('GoalPlannerComponent', () => {
  let component: GoalPlannerComponent;
  let fixture: ComponentFixture<GoalPlannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoalPlannerComponent]
    });
    fixture = TestBed.createComponent(GoalPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
