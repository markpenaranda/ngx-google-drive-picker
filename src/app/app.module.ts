import { NgxGoogleDrivePickerModule } from './../../projects/ngx-google-drive-picker/src/lib/ngx-google-drive-picker.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleDrivePickerModule.forRoot({
      clientId: '941661943452-clqq87jcm59targ430aot12ass5n0fnd.apps.googleusercontent.com'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
