import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})
export class BikeComponent implements OnInit,OnDestroy {
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private controls!: OrbitControls;

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    ngOnInit() {
      this.init3D();
    }

    ngOnDestroy() {
      if (this.renderer) {
        this.renderer.dispose();
      }
    }

    private init3D() {
      // Set up the scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x2e2e2e); // Light black background color
      this.scene.background = new THREE.Color(0xffffff); // White background color

      // Set up the camera
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.set(0, 2, 10); // Initial camera position

      // Set up the renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor(0x2e2e2e); // Set clear color to match background
      this.renderer.setClearColor(0xffffff); // Set clear color to match background

      document.getElementById('container')!.appendChild(this.renderer.domElement);

      // Add orbit controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.25;
      this.controls.enableZoom = true;
      this.controls.autoRotate = false;

      // Ensure controls rotate around the center of the scene
      this.controls.target.set(0, 0, 0); // Rotate around the origin
      this.controls.update();

      // Load the bike model
      const loader = new GLTFLoader();
      loader.load('assets/2016__apollo_arrow (1).glb', (gltf) => {
        const bikeModel = gltf.scene;
        bikeModel.position.set(0, 0, 0); // Position the bike at the origin
        bikeModel.scale.set(0.5, 0.5, 0.5); // Scale the model
        this.scene.add(bikeModel);
      }, undefined, (error) => {
        console.error('An error occurred while loading the model', error);
      });

      // Add lights
      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      this.scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5).normalize();
      this.scene.add(directionalLight);

      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(-5, 5, 5);
      this.scene.add(pointLight);

      // Render loop
      const animate = () => {
        requestAnimationFrame(animate);
        this.controls.update(); // Update controls
        this.renderer.render(this.scene, this.camera);
      };
      animate();
    }
}



