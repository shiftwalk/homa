// import * as THREE from "three";
import { Group } from "three";
import Experience from "../Experience";

import fitTo from "../utils/Maths/fitTo";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.time = this.experience.time;
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.camera = this.experience.camera;

    this.currentModels = [];

    this.gltfLoader = new GLTFLoader();
    this.groupModels = new Group();

    this.scrollY = 0;
  }

  addModel(model, section, offset) {
    const modelY = (section.offsetTop / this.sizes.screen.height) * 8;

    this.gltfLoader.load(model, (file) => {
      this.model = file;
      this.model.customParams = {
        section: section,
        offset,
      };
      this.model.scene.scale.set(0.08, 0.08, 0.08);
      this.model.scene.position.set(3.5, -modelY + offset, -3);

      this.currentModels.push(this.model);

      this.scene.add(this.model.scene);
    });
  }

  update() {
    if (this.currentModels.length > 0) {
      this.currentModels.forEach(
        (item) => (item.scene.rotation.y += Math.sin(this.time.delta / 1000))
      );
    }
  }

  resize() {
    if (this.currentModels.length > 0) {
      this.currentModels.forEach((mesh) => {
        mesh.scene.position.set(
          3.5,
          (-mesh.customParams.section.offsetTop / this.sizes.screen.height +
            mesh.customParams.offset) *
            8,
          -3
        );
      });
    }
  }
}
