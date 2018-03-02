import { Component, OnInit, Input } from '@angular/core';
import { VideoPairComponent } from './video-pair/video-pair.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  // TODO(dmay): is this @Input necessary?
  @Input() videoId: string = 'nHO50-7l-Vg';
  @Input() audioId: string = 'vHP4VbhtGJ4';
  videoPair: VideoPairComponent;

  splice(){
    alert("video: " +  this.videoId + "    audio: " + this.audioId);
  }

  ngOnInit() {
    // this.setVideoId(this.videoId);
    // this.setAudioId(this.audioId);
  }

}
