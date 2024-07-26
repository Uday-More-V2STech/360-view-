import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sprite-rotate',
  templateUrl: './sprite-rotate.component.html',
  styleUrls: ['./sprite-rotate.component.scss']
})
export class SpriteRotateComponent {
  private totalFrames = 13; // Number of images you have
  private currentFrame = 0;
  public currentImage: any;

  private imagePathPrefix = '/assets/gui_'; // Path prefix to your images
  private imagePathSuffix = '.jpeg'; // File extension of your images

  constructor() {}

  ngOnInit(): void {
    this.updateImage();
  }

  rotateBike(): void {
    this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
    this.updateImage();
  }

  private updateImage(): void {
    this.currentImage = `${this.imagePathPrefix}${this.currentFrame}${this.imagePathSuffix}`;
  }
}
