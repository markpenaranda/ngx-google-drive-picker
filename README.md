# ngx-google-drive-picker

> Library for using google drive picker angular

## How to use

in `app.module.ts`

```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Import NgxGoogleDrivePickerModule and input clientId
    NgxGoogleDrivePickerModule.forRoot({
      clientId: 'YOUR_CLIENT_ID_HERE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```

## Use service 

Open with an already generated token
```
googleDriveService.openWithToken(token, (file: File) => {
  // callback method onSelect
  // 
})
```

Open with no token
```
googleDriveService.open((file: File) => {
  // callback method onSelect
  // 
})
```

***On Select Callback***
> on select callback returns a `File` that you can consume

```
export interface File {
  fileId: string
  name: string
  url: string
  sizeBytes: number
  type: string
  lastEditedAtUTC: number
}
```


## Use selector component

```
<ngx-google-drive-picker 
buttonLabel = "Select File"
(onSelect)="triggerOnSelectFile"
>
```
