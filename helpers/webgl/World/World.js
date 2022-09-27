// import * as THREE from "three";
import Experience from "../Experience";

import Model from "./Model";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.camera = this.experience.camera;

    this.currentModels = [];

    this.scrollY = 0;
  }

  addModel(
    model,
    section,
    xPosition,
    yPosition,
    zPosition,
    customScale,
    animationTimingModifier
  ) {
    const newModel = new Model(
      model,
      section,
      xPosition,
      yPosition,
      zPosition,
      customScale,
      animationTimingModifier
    );

    this.currentModels.push(newModel);
  }

  update() {
    if (this.currentModels.length > 0) {
      this.currentModels.forEach((model) => {
        model.update();
      });
    }
  }

  resize() {
    if (this.currentModels.length > 0) {
      this.currentModels.forEach((model) => {
        model.resize();
      });
    }
  }
}
