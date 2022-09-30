import * as THREE from "three";
import Experience from "./Experience";

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;

    this.setInstance();
  }

  setInstance = () => {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.instance.domElement.classList.remove("--hidden");
    this.instance.setSize(this.sizes.screen.width, this.sizes.screen.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  };

  resize = () => {
    this.instance.setSize(this.sizes.screen.width, this.sizes.screen.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  };

  update = () => {};

  destroy = () => {
    this.instance.dispose();
    this.instance.domElement.classList.add("--hidden");
  };
}
