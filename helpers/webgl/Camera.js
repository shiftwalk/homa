import * as THREE from "three";

import Experience from "./Experience.js";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;

    this.aspectRatio = this.sizes.screen.width / this.sizes.screen.height;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(50, this.aspectRatio, 1, 100);
    this.instance.position.set(0, 0, 5);
    this.scene.add(this.instance);
  }

  resize() {
    this.aspectRatio = this.sizes.screen.width / this.sizes.screen.height;
    this.instance.aspect = this.aspectRatio;
    this.instance.updateProjectionMatrix();
  }

  update() {}

  destroy() {}
}
