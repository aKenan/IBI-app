import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpisiComponent } from './opisi.component';

describe('OpisiComponent', () => {
  let component: OpisiComponent;
  let fixture: ComponentFixture<OpisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
