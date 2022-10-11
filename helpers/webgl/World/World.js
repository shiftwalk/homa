// import * as THREE from "three";
import Experience from "../Experience";

import Model from "./Model";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.renderer = this.experience.renderer.instance;

    this.gltfLoader = new GLTFLoader();

    this.models = [];
  }

  addModel = (
    modelUrl,
    container,
    scale,
    animationTimingModifier,
    customEmissive,
    mouseMultiplicator
  ) => {
    const newModel = new Model(
      modelUrl,
      container,
      scale,
      animationTimingModifier,
      customEmissive,
      mouseMultiplicator
    );
    this.models.push(newModel);
  };

  update = () => {
    if (this.models) {
      this.models.forEach((model) => {
        model.update();
      });
    }
  };

  resize = () => {
    if (this.models) {
      this.models.forEach((model) => {
        model.resize();
      });
    }
  };

  destroy = () => {
    if (this.models) {
      this.models.forEach((model) => {
        model.destroy();
      });
      this.models = [];
    }
  };
}
