import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { VideoPairComponent } from './video-pair/video-pair.component';
import { SpeedSelectComponent } from './speed-select/speed-select.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPairComponent,
    SpeedSelectComponent,
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
