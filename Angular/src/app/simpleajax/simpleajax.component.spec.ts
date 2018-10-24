import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAjaxComponent } from './simpleajax.component';

describe('SimpleAjaxComponent', () => {
  let component: SimpleAjaxComponent;
  let fixture: ComponentFixture<SimpleAjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
