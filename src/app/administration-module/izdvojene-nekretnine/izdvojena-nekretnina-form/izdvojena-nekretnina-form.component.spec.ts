import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzdvojenaNekretninaFormComponent } from './izdvojena-nekretnina-form.component';

describe('IzdvojenaNekretninaFormComponent', () => {
  let component: IzdvojenaNekretninaFormComponent;
  let fixture: ComponentFixture<IzdvojenaNekretninaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzdvojenaNekretninaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzdvojenaNekretninaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
