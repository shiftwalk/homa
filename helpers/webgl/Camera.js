import * as THREE from "three";
import Experience from "./Experience.js";
import fitTo from "./utils/Maths/fitTo.js";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;

    this.aspectRatio = this.sizes.screen.width / this.sizes.screen.height;

    this.setInstance();
  }

  setInstance = () => {
    this.instance = new THREE.PerspectiveCamera(35, this.aspectRatio, 1, 100);
    this.instance.position.set(0, 0, 5);

    this.fitter = fitTo(
      this.instance,
      0,
      this.sizes.screen.width,
      this.sizes.screen.height
    );

    this.scene.add(this.instance);
  };

  resize = () => {
    this.aspectRatio = this.sizes.screen.width / this.sizes.screen.height;
    this.instance.aspect = this.aspectRatio;
    this.instance.updateProjectionMatrix();
    this.fitter = fitTo(
      this.instance,
      0,
      this.sizes.screen.width,
      this.sizes.screen.height
    );
    this.instance.position.y =
      (-window.lenis.scroll / this.sizes.screen.height) * this.fitter.height;
  };

  update = () => {
    if (this.fitter) {
      this.instance.position.y =
        (-window.lenis.scroll / this.sizes.screen.height) * this.fitter.height;
    }
  };

  destroy = () => {};
}
