import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('rotatingImage') rotatingImage!: ElementRef<HTMLImageElement>;
  isDragging = false;
  lastX = 0;
  lastY = 0;
  rotationX = 0;
  rotationY = 0;
  
  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.lastX = event.clientX;
    this.lastY = event.clientY;
  }

  onDrag(event: MouseEvent) {
    if (this.isDragging) {
      const deltaX = event.clientX - this.lastX;
      const deltaY = event.clientY - this.lastY;

      this.rotationY += deltaX * 0.5; // Adjust sensitivity
      this.rotationX -= deltaY * 0.5; // Adjust sensitivity

      this.rotatingImage.nativeElement.style.transform = `rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg)`;
      this.lastX = event.clientX;
      this.lastY = event.clientY;
    }
  }

  stopDrag() {
    this.isDragging = false;
  }
}
