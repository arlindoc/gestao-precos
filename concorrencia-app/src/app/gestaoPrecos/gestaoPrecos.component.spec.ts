/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GestaoPrecosComponent } from './gestaoPrecos.component';

describe('GestaoPrecosComponent', () => {
  let component: GestaoPrecosComponent;
  let fixture: ComponentFixture<GestaoPrecosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoPrecosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoPrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
