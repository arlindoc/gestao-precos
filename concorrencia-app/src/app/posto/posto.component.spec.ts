/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostoComponent } from './posto.component';

describe('PostoComponent', () => {
  let component: PostoComponent;
  let fixture: ComponentFixture<PostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
