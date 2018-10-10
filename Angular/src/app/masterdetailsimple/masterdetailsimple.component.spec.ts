import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdDetailSimpleComponent } from './masterdetailsimple.component';

describe('MasterdDetailSimpleComponent', () => {
  let component: MasterdDetailSimpleComponent;
  let fixture: ComponentFixture<MasterdDetailSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdDetailSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdDetailSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
