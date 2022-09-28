import Experience from "../Experience";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default class Model {
  constructor(modelUrl, container, scale, animationTimingModifier) {
    this.experience = new Experience();
    this.time = this.experience.time;
    this.renderer = this.experience.renderer.instance;

    this.gltfLoader = new GLTFLoader();

    this.modelUrl = modelUrl;
    this.container = container;
    this.scale = scale;
    this.animationTimingModifier = animationTimingModifier;

    this.createModel();
  }

  createModel = () => {
    this.modelScene = new THREE.Scene();
    this.modelScene.userData.element = this.container;

    const camera = new THREE.PerspectiveCamera(50, 1, 1, 10);
    camera.position.z = 2;
    this.modelScene.userData.camera = camera;

    this.gltfLoader.load(this.modelUrl, (file) => {
      this.model = file;
      this.model.scene.scale.set(this.scale, this.scale, this.scale);
      this.modelScene.add(this.model.scene);

      if (this.model.scene.animations) {
        this.mixer = new THREE.AnimationMixer(this.model.scene);
        const action = this.mixer.clipAction(this.model.animations[0]);
        action.play();
      }
    });
  };

  update() {
    if (this.mixer) {
      this.mixer.update(this.time.delta * this.animationTimingModifier);
    }

    const element = this.modelScene.userData.element;
    const rect = element.getBoundingClientRect();

    if (
      rect.bottom < 0 ||
      rect.top > this.renderer.domElement.clientHeight ||
      rect.right < 0 ||
      rect.left > this.renderer.domElement.clientWidth
    ) {
      return; // it's off screen
    }
    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;
    const left = rect.left;
    const bottom = this.renderer.domElement.clientHeight - rect.bottom;

    this.renderer.setViewport(left, bottom, width, height);
    this.renderer.setScissor(left, bottom, width, height);

    const camera = this.modelScene.userData.camera;

    this.renderer.render(this.modelScene, camera);
  }

  resize() {
    // RESIZE TODO
  }

  destroy() {
    // DESTROY TODO
  }
}
