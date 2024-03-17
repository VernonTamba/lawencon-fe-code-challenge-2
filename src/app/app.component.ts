import { Component, OnInit } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fe-code-challenge-2-vernon-tamba';

  isPlaying: boolean = false;

  videoPlayer: any;

  ngOnInit(): void {
    this.videoPlayer = videojs('my-video');
  }

  onPlay(): void {
    this.isPlaying = true;
    this.videoPlayer.play();
  }

  onRestart(): void {
    this.isPlaying = true;
    this.videoPlayer.currentTime(0);
    this.videoPlayer.play();
  }

  onPause(): void {
    this.isPlaying = false;
    this.videoPlayer.pause();
  }

  onFastForward(): void {
    this.videoPlayer.currentTime(this.videoPlayer.currentTime() + 10);
  }

  onFastBackward(): void {
    this.videoPlayer.currentTime(this.videoPlayer.currentTime() - 10);
  }
}
