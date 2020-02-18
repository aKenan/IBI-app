import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NekretninaBasicComponent } from './nekretnina-basic.component';

describe('NekretninaBasicComponent', () => {
  let component: NekretninaBasicComponent;
  let fixture: ComponentFixture<NekretninaBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NekretninaBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NekretninaBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
