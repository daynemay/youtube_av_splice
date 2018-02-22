import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  videoPlayer: YT.Player;
  audioPlayer: YT.Player;
  videoId: string = 'nHO50-7l-Vg'; 
  audioId: string = 'vHP4VbhtGJ4';
  setVideo(player) {
    this.videoPlayer = player;
    this.start();
  }
  setAudio(player) {
    this.audioPlayer = player;
    this.start();
  }
  onVideoChange(event){
    // TODO: this is not working properly; it seems to sometimes need a pause+play to take effect:
    // this.audioPlayer.setPlaybackRate(this.videoPlayer.getPlaybackRate());
    if (event.data == YT.PlayerState.PAUSED) {
      this.audioPlayer.pauseVideo()
    }
    if (event.data == YT.PlayerState.PLAYING) {
      this.audioPlayer.playVideo();
    }
  }
  onAudioChange(event){
  }
  start() {
    if (!this.videoPlayer || !this.audioPlayer) {
      return;
    }
    this.audioPlayer.setSize(0,0);
    this.videoPlayer.mute();
    this.audioPlayer.unMute();
    this.audioPlayer.setVolume(100);
    // TODO: figure out how to get a YoutubePlayerService instance so that I can:
    // YoutubePlayerService.toggleFullScreen(this.videoPlayer);
    this.videoPlayer.playVideo();
    this.audioPlayer.playVideo();
  } 
}
