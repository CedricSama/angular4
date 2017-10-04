import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideShowComponentComponent } from './hide-show-component.component';

describe('HideShowComponentComponent', () => {
  let component: HideShowComponentComponent;
  let fixture: ComponentFixture<HideShowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideShowComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideShowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
