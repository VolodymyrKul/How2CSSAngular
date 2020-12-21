import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareachievsComponent } from './compareachievs.component';

describe('CompareachievsComponent', () => {
  let component: CompareachievsComponent;
  let fixture: ComponentFixture<CompareachievsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareachievsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareachievsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
