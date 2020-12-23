import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveachievComponent } from './saveachiev.component';

describe('SaveachievComponent', () => {
  let component: SaveachievComponent;
  let fixture: ComponentFixture<SaveachievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveachievComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveachievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
