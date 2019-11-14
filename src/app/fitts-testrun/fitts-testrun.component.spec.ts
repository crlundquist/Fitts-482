import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FittsTestrunComponent } from './fitts-testrun.component';

describe('FittsTestrunComponent', () => {
  let component: FittsTestrunComponent;
  let fixture: ComponentFixture<FittsTestrunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FittsTestrunComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FittsTestrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
