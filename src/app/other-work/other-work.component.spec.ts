import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWorkComponent } from './other-work.component';

describe('OtherWorkComponent', () => {
  let component: OtherWorkComponent;
  let fixture: ComponentFixture<OtherWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
