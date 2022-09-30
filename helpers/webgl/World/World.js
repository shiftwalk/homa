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

    this.currentScenes = [];
  }

  addScene = (
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
    this.currentScenes.push(newModel);
  };

  update = () => {
    if (this.currentScenes.length > 0) {
      this.currentScenes.forEach((scene) => {
        scene.update();
      });
    }
  };

  resize = () => {
    if (this.currentScenes.length > 0) {
      this.currentScenes.forEach((scene) => {
        scene.resize();
      });
    }
  };

  destroy = () => {
    if (this.currentScenes.length > 0) {
      this.currentScenes.forEach((scene) => {
        scene.destroy();
      });
      this.currentScenes = [];
    }
  };
}
