import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpisiNekretnineComponent } from './opisi-nekretnine.component';

describe('OpisiNekretnineComponent', () => {
  let component: OpisiNekretnineComponent;
  let fixture: ComponentFixture<OpisiNekretnineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpisiNekretnineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpisiNekretnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
