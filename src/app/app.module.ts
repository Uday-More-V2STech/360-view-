import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BikeComponent } from './bike/bike.component';
import { SpriteRotateComponent } from './sprite-rotate/sprite-rotate.component';
import { CanvasjsComponent } from './canvasjs/canvasjs.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeComponent,
    SpriteRotateComponent,
    CanvasjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
