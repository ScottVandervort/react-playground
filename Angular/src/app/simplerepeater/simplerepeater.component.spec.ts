import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRepeaterComponent } from './simplerepeater.component';

describe('SimpleRepeaterComponent', () => {
  let component: SimpleRepeaterComponent;
  let fixture: ComponentFixture<SimpleRepeaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRepeaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRepeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
