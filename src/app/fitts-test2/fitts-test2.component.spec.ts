import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FittsTest2Component } from './fitts-test2.component';

describe('FittsTest2Component', () => {
  let component: FittsTest2Component;
  let fixture: ComponentFixture<FittsTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FittsTest2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FittsTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
