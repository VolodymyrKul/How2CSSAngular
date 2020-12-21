import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnachievsComponent } from './ownachievs.component';

describe('OwnachievsComponent', () => {
  let component: OwnachievsComponent;
  let fixture: ComponentFixture<OwnachievsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnachievsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnachievsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
