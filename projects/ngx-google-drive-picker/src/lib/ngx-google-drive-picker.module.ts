import { NgxGoogleDrivePickerService } from './ngx-google-drive-picker.service';
import { NgxGoogleDriveApiConfig } from './ngx-google-drive-api.config';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxGoogleDrivePickerComponent } from './ngx-google-drive-picker.component';



@NgModule({
  declarations: [
    NgxGoogleDrivePickerComponent
  ],
  imports: [
  ],
  exports: [
    NgxGoogleDrivePickerComponent
  ]
})
export class NgxGoogleDrivePickerModule {
  static forRoot(config: { clientId: string }): ModuleWithProviders <NgxGoogleDrivePickerModule>{
    const conf = new NgxGoogleDriveApiConfig()
    conf.clientId = config.clientId
    this.loadScript();
    return {
      ngModule: NgxGoogleDrivePickerModule,
      providers: [
        NgxGoogleDrivePickerService,
        {provide: NgxGoogleDriveApiConfig, useValue: conf}
      ]
    }
  }

  private static loadScript() {
    console.log('preparing to load...')
    let gapi = document.createElement('script');
    gapi.src = "https://apis.google.com/js/api.js";
    gapi.type = 'text/javascript';
    gapi.async = true;
    document.getElementsByTagName('head')[0].appendChild(gapi);

    let googlePlatform = document.createElement('script');
    googlePlatform.src = "https://apis.google.com/js/platform.js";
    googlePlatform.type = 'text/javascript';
    googlePlatform.async = true;
    document.getElementsByTagName('head')[0].appendChild(googlePlatform);
  }
 }
