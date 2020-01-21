import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpisiFormComponent } from './opisi-form.component';

describe('OpisiFormComponent', () => {
  let component: OpisiFormComponent;
  let fixture: ComponentFixture<OpisiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpisiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpisiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
