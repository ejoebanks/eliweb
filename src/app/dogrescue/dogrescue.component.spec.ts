import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogrescueComponent } from './dogrescue.component';

describe('DogrescueComponent', () => {
  let component: DogrescueComponent;
  let fixture: ComponentFixture<DogrescueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogrescueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogrescueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
