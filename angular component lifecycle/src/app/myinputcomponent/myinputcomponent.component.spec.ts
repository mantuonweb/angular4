import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinputcomponentComponent } from './myinputcomponent.component';

describe('MyinputcomponentComponent', () => {
  let component: MyinputcomponentComponent;
  let fixture: ComponentFixture<MyinputcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyinputcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinputcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
