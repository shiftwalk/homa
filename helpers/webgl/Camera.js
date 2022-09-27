import * as THREE from "three";

import Experience from "./Experience.js";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.scroll = this.experience.scroll;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.screen.width / this.sizes.screen.height,
      1,
      100
    );
    this.instance.position.set(
      0,
      (this.instance.position.y / this.sizes.viewport.height) * 8,
      8
    );
    this.scene.add(this.instance);
  }

  resize() {
    this.instance.aspect = this.sizes.screen.width / this.sizes.screen.height;
    this.instance.updateProjectionMatrix();
    this.instance.position.y =
      (this.instance.position.y / this.sizes.viewport.height) * 8;
  }

  update() {
    this.instance.position.y = this.scroll.scrollY * 8;
  }

  destroy() {}
}
