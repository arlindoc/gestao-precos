/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BandeiraComponent } from './bandeira.component';

describe('BandeiraComponent', () => {
  let component: BandeiraComponent;
  let fixture: ComponentFixture<BandeiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
