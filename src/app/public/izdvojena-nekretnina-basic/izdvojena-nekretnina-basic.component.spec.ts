import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzdvojenaNekretninaBasicComponent } from './izdvojena-nekretnina-basic.component';

describe('IzdvojenaNekretninaBasicComponent', () => {
  let component: IzdvojenaNekretninaBasicComponent;
  let fixture: ComponentFixture<IzdvojenaNekretninaBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzdvojenaNekretninaBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzdvojenaNekretninaBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
