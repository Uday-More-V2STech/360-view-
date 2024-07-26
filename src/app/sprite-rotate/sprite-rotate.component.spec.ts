import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpriteRotateComponent } from './sprite-rotate.component';

describe('SpriteRotateComponent', () => {
  let component: SpriteRotateComponent;
  let fixture: ComponentFixture<SpriteRotateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpriteRotateComponent]
    });
    fixture = TestBed.createComponent(SpriteRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
