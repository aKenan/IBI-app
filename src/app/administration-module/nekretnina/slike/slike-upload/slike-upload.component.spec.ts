import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlikeUploadComponent } from './slike-upload.component';

describe('SlikeUploadComponent', () => {
  let component: SlikeUploadComponent;
  let fixture: ComponentFixture<SlikeUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlikeUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlikeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
