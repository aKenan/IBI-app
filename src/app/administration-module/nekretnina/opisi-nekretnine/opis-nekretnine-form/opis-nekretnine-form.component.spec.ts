import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpisNekretnineFormComponent } from './opis-nekretnine-form.component';

describe('OpisNekretnineFormComponent', () => {
  let component: OpisNekretnineFormComponent;
  let fixture: ComponentFixture<OpisNekretnineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpisNekretnineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpisNekretnineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
