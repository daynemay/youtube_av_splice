import { Component, OnInit, Input, Output } from '@angular/core';
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
  @Output() videoPair: VideoPairComponent = new VideoPairComponent();

  splice(){
    console.log("video: " +  this.videoId + "    audio: " + this.audioId);
    this.videoPair.pause();
    this.videoPair.setVideoId(this.videoId);
    this.videoPair.setAudioId(this.audioId);
    this.videoPair.play();
  }

  ngOnInit() {
    // this.setVideoId(this.videoId);
    // this.setAudioId(this.audioId);
  }

}
