import { File } from './file.model';
import { NgxGoogleDriveApiConfig } from './ngx-google-drive-api.config';
import { Inject, Injectable } from '@angular/core';
declare var gapi: any;
declare var google: any;

@Injectable()
export class NgxGoogleDrivePickerService {

  scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/drive'
  ].join(' ');

  constructor(
    @Inject(NgxGoogleDriveApiConfig) private config: NgxGoogleDriveApiConfig
  ) { }

  private onSelectCallback?: (file: File) => any


  openPicker(onSelect: (file: File) => any) {
    this.onSelectCallback = onSelect
    gapi.load('auth', { 'callback': () =>{ this.onAuthApiLoad() }});
    gapi.load('picker', { 'callback': () =>{  this.onPickerApiLoad() } });
  }

  openPickerWithToken(token: string, onSelect: (file: File) => any) {
    let picker = this.buildPickerComponent(token, onSelect)
    picker.setVisible(true);
  }

  pickerApiLoaded = false;

  onAuthApiLoad() {
    gapi.auth.authorize(
      {
        'client_id': this.config.clientId,
        'scope': this.scope,
        'immediate': false
      },
      (authResult: any) => {this.handleAuthResult(authResult) });
  }

  onPickerApiLoad() {
    this.pickerApiLoaded = true;
  }

  handleAuthResult(authResult: any) {
    let src;
    if (authResult && !authResult.error) {
      if (authResult.access_token && this.onSelectCallback) {
        this.openPickerWithToken(authResult.access_token, this.onSelectCallback)
      }
    }
  }



  private buildPickerComponent(token: string, callback: (file: File) => any) {
    let view = new google.picker.View(google.picker.ViewId.DOCS);
    view.setMimeTypes("image/png,image/jpeg,image/jpg,video/mp4");
    let pickerBuilder = new google.picker.PickerBuilder();
    let picker = pickerBuilder
          .enableFeature(google.picker.Feature.NAV_HIDDEN)
          .setOAuthToken(token)
          .addView(view)
          .addView(new google.picker.DocsUploadView())
          .setCallback((e: any) => {

            if (e[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                 let doc = e[google.picker.Response.DOCUMENTS][0];
                 let src = doc[google.picker.Document.URL];

                 callback(this.buildFileFromDoc(doc))
            }
          }).
          build();

     return picker;
  }

  private buildFileFromDoc(doc: any): File {
    return {
      fileId: doc['id'],
      name: doc['name'],
      sizeBytes: doc['sizeBytes'],
      type: doc['type'],
      url: doc['url'],
      lastEditedAtUTC: doc['lastEditedAtUTC']
    }
  }
}
