import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvasjs',
  templateUrl: './canvasjs.component.html',
  styleUrls: ['./canvasjs.component.scss']
})
export class CanvasjsComponent implements AfterViewInit {
  @ViewChild('bikeCanvas') bikeCanvas!: ElementRef<HTMLCanvasElement>;
  private image = new Image(); // Store the image object

  private totalFrames = 12; // Ensure this matches the actual number of frames in your sprite sheet
  private currentFrame = 0; // Start from 0 for proper indexing
  private frameWidth = 1472; // Calculated width of each frame
  private frameHeight = 3264; // Calculated height of each frame

  constructor() {}

  ngAfterViewInit(): void { // Use ngAfterViewInit instead of ngOnInit
    this.loadAndDrawImages();
  }

  private loadAndDrawImages(): void {
    const canvas = this.bikeCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Unable to get canvas context.');
      return;
    }

    this.image.src = 'assets/spritesheet (1).png'; // Your sprite sheet

    this.image.onload = () => {
      // Log the sprite sheet dimensions
      console.log(`Sprite sheet loaded with dimensions: ${this.image.width}x${this.image.height}`);

      // Adjust canvas size to match the frame size
      canvas.width = this.frameWidth;
      canvas.height = this.frameHeight;
      this.drawFrame(ctx, this.image);
    };
  }

  rotateBike(): void {
    const ctx = this.bikeCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Unable to get canvas context.');
      return;
    }

    this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
    this.drawFrame(ctx, this.image); // Use the stored image
  }

  private drawFrame(ctx: CanvasRenderingContext2D, image: HTMLImageElement): void {
    // Calculate xOffset based on the current frame index and frame width
    const xOffset = this.currentFrame * this.frameWidth; 
    console.log(`Drawing frame ${this.currentFrame} at offset ${xOffset}`);

    // Clear the canvas before drawing the new frame
    ctx.clearRect(0, 0, this.frameWidth, this.frameHeight);

    // Ensure the image is scaled correctly within the canvas dimensions
    ctx.drawImage(
      image, 
      xOffset, 0, this.frameWidth, this.frameHeight, // Source rectangle
      0, 0, this.frameWidth, this.frameHeight // Destination rectangle
    );
  }
}
