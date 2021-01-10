import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelexecutionComponent } from './levelexecution.component';

describe('LevelexecutionComponent', () => {
  let component: LevelexecutionComponent;
  let fixture: ComponentFixture<LevelexecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelexecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelexecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
