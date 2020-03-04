import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzdvojeneNekretnineComponent } from './izdvojene-nekretnine.component';

describe('IzdvojeneNekretnineComponent', () => {
  let component: IzdvojeneNekretnineComponent;
  let fixture: ComponentFixture<IzdvojeneNekretnineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzdvojeneNekretnineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzdvojeneNekretnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
