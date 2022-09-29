import Experience from "../Experience";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import lerp from "../utils/Maths/lerp";

export default class Model {
  constructor(
    modelUrl,
    container,
    scale,
    animationTimingModifier,
    customEmissive
  ) {
    this.experience = new Experience();
    this.time = this.experience.time;
    this.sizes = this.experience.sizes;
    this.renderer = this.experience.renderer.instance;
    this.scroll = this.experience.scroll;

    this.gltfLoader = new GLTFLoader();

    this.modelUrl = modelUrl;
    this.container = container;
    this.scale = scale;
    this.animationTimingModifier = animationTimingModifier;
    this.customEmissive = customEmissive;

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

      if (this.customEmissive !== null) {
        this.model.scene.traverse((scene) => {
          if (scene.isMesh) {
            scene.material.emissive = new THREE.Color(this.customEmissive);
            scene.material.needsUpdate = true;
          }
        });
      }

      if (this.model.scene.animations) {
        this.mixer = new THREE.AnimationMixer(this.model.scene);
        const action = this.mixer.clipAction(this.model.animations[0]);
        action.play();
      }
    });
  };

  update = () => {
    if (this.modelScene !== null) {
      if (this.model) {
        this.model.scene.position.x = lerp(
          this.model.scene.position.x,
          this.scroll.mouse.x * 0.2,
          0.075
        );
        this.model.scene.position.y = lerp(
          this.model.scene.position.y,
          -this.scroll.mouse.y * 0.2,
          0.075
        );
      }

      if (this.mixer) {
        this.mixer.update(
          this.time.delta * this.animationTimingModifier +
            this.scroll.scrollForce * 0.001
        );
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
  };

  resize = () => {};

  destroy = () => {
    this.modelScene.traverse((scene) => {
      if (scene.isMesh) {
        scene.geometry.dispose();
        scene.material.dispose();
      }
    });
    if (this.mixer) {
      this.mixer.stopAllAction();
    }
    this.modelScene = null;
  };
}
