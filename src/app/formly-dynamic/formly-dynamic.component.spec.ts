import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyDynamicComponent } from './formly-dynamic.component';

describe('FormlyDynamicComponent', () => {
  let component: FormlyDynamicComponent;
  let fixture: ComponentFixture<FormlyDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
