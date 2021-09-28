import { NgxGoogleDrivePickerService } from './ngx-google-drive-picker.service';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'ngx-google-drive-picker',
  template: `
    <button (click)="openPicker()">{{ buttonLabel }}</button>
  `,
  styles: [
  ]
})
export class NgxGoogleDrivePickerComponent {

  constructor(private service: NgxGoogleDrivePickerService) {}

  @Input() buttonLabel = "Select from google drive"

  // TODO : create an @Output for onSelect

  openPicker() {
    this.service.openPicker((file) => {
      console.log(file)
    })
  }
}
