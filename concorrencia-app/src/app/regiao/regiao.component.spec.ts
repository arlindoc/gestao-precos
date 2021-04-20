/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegiaoComponent } from './regiao.component';

describe('RegiaoComponent', () => {
  let component: RegiaoComponent;
  let fixture: ComponentFixture<RegiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
