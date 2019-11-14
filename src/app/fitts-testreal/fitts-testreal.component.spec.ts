import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FittsTestrealComponent } from './fitts-testreal.component';

describe('FittsTestrealComponent', () => {
  let component: FittsTestrealComponent;
  let fixture: ComponentFixture<FittsTestrealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FittsTestrealComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FittsTestrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
