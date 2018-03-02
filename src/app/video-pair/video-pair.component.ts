import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-pair',
  templateUrl: './video-pair.component.html',
  styleUrls: ['./video-pair.component.less']
})

export class VideoPairComponent implements OnInit {
  videoPlayer: YT.Player;
  audioPlayer: YT.Player;
  @Input() videoId: string;
  @Input() audioId: string;

  constructor() {
    // debugger;
    // this.videoPlayer = new YT.Player(null, null);
    // this.audioPlayer = new YT.Player(null, null);
  }

  ngOnInit() { }

  setVideoId(videoId: string){
    this.videoId = videoId;
  }
  setAudioId(audioId: string){
    this.audioId = audioId;
  }

  pause(){
    if (this.videoPlayer) { this.videoPlayer.pauseVideo(); }
    if (this.audioPlayer) { this.audioPlayer.pauseVideo(); }
  }
  play(){
    if (this.videoPlayer) { this.videoPlayer.playVideo(); }
    if (this.audioPlayer) { this.audioPlayer.playVideo(); }
  }

  videoReady(player) {
    this.videoPlayer = player;
    this.start();
  }
  audioReady(player) {
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
    if (!this.videoPlayer || !this.audioPlayer || !this.audioId || !this.videoId) {
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
