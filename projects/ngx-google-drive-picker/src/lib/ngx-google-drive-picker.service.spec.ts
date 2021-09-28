import { TestBed } from '@angular/core/testing';

import { NgxGoogleDrivePickerService } from './ngx-google-drive-picker.service';

describe('NgxGoogleDrivePickerService', () => {
  let service: NgxGoogleDrivePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGoogleDrivePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
