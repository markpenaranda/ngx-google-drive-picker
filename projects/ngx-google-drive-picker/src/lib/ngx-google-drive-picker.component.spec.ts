import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGoogleDrivePickerComponent } from './ngx-google-drive-picker.component';

describe('NgxGoogleDrivePickerComponent', () => {
  let component: NgxGoogleDrivePickerComponent;
  let fixture: ComponentFixture<NgxGoogleDrivePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGoogleDrivePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGoogleDrivePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
