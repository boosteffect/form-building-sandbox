import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyDesignerComponent } from './formly-designer.component';

describe('FormlyDesignerComponent', () => {
  let component: FormlyDesignerComponent;
  let fixture: ComponentFixture<FormlyDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
