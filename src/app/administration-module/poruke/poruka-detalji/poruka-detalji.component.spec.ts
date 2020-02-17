import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorukaDetaljiComponent } from './poruka-detalji.component';

describe('PorukaDetaljiComponent', () => {
  let component: PorukaDetaljiComponent;
  let fixture: ComponentFixture<PorukaDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorukaDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorukaDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
