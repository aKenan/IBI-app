import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NekretninaFormComponent } from './nekretnina-form.component';

describe('NekretninaFormComponent', () => {
  let component: NekretninaFormComponent;
  let fixture: ComponentFixture<NekretninaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NekretninaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NekretninaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
