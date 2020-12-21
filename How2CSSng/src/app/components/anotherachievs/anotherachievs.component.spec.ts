import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherachievsComponent } from './anotherachievs.component';

describe('AnotherachievsComponent', () => {
  let component: AnotherachievsComponent;
  let fixture: ComponentFixture<AnotherachievsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherachievsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherachievsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
