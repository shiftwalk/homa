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
    customEmissive,
    mouseMultiplicator
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
    this.mouseMultiplicator = mouseMultiplicator;
    this.modelFaces = false;

    this.createModel();
    this.getBounds();
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

      if (this.customEmissive !== null) {
        this.model.scene.traverse((scene) => {
          if (scene.isMesh) {
            scene.material.emissive = new THREE.Color(this.customEmissive);
            scene.material.needsUpdate = true;
          }
        });
      }

      this.modelScene.add(this.model.scene);

      if (this.model.scene.animations && this.model.animations[0]) {
        this.mixer = new THREE.AnimationMixer(this.model.scene);
        const action = this.mixer.clipAction(this.model.animations[0]);
        action.play();
      }
    });

    if (this.modelUrl.includes("faces")) {
      this.modelFaces = true;
    }
  };

  getBounds = () => {
    this.containerRect = this.container.getBoundingClientRect();

    this.rectWidth = this.containerRect.right - this.containerRect.left;
    this.rectHeight = this.containerRect.bottom - this.containerRect.top;
    this.rectLeft = this.containerRect.left;
    this.rectBottom =
      this.renderer.domElement.clientHeight - this.containerRect.bottom;

    this.renderer.setScissor(
      this.rectLeft,
      this.rectBottom,
      this.rectWidth,
      this.rectHeight
    );
  };

  update = () => {
    if (this.modelScene !== null) {
      if (this.mouseMultiplicator !== 0 && this.model) {
        if (this.modelFaces === true) {
          this.model.scene.rotation.y = lerp(
            this.model.scene.rotation.y,
            this.scroll.mouse.x * this.mouseMultiplicator,
            0.07
          );
          this.model.scene.rotation.x = lerp(
            this.model.scene.rotation.x,
            this.scroll.mouse.y * this.mouseMultiplicator,
            0.07
          );
        } else {
          this.model.scene.quaternion.z = lerp(
            this.model.scene.quaternion.z,
            -this.scroll.mouse.x * this.mouseMultiplicator,
            0.07
          );

          this.model.scene.quaternion.x = lerp(
            this.model.scene.quaternion.x,
            this.scroll.mouse.y * this.mouseMultiplicator,
            0.07
          );
        }
      }

      // if (this.modelScene.userData.camera && this.model) {
      //   this.modelScene.userData.camera.quaternion.y = lerp(
      //     this.modelScene.userData.camera.quaternion.y,
      //     -this.scroll.mouse.x * this.mouseMultiplicator,
      //     0.075
      //   );
      // this.modelScene.userData.camera.quaternion.y = lerp(
      //   this.modelScene.userData.camera.quaternion.y,
      //   -this.scroll.mouse.y * this.mouseMultiplicator,
      //   0.075
      // );
      // this.modelScene.userData.camera.lookAt(this.model.scene.position);
      // }

      if (this.mixer) {
        this.mixer.update(
          this.time.delta * this.animationTimingModifier +
            this.scroll.scrollForce * 0.001
        );
      }

      const bottom =
        this.renderer.domElement.clientHeight -
        this.container.getBoundingClientRect().bottom;

      this.renderer.setViewport(
        this.rectLeft,
        bottom,
        this.rectWidth,
        this.rectHeight
      );

      this.renderer.render(this.modelScene, this.modelScene.userData.camera);
    }
  };

  resize = () => {
    this.getBounds();
  };

  destroy = () => {
    this.modelScene.traverse((child) => {
      // Test if it's a mesh
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();

        // Loop through the material properties
        for (const key in child.material) {
          const value = child.material[key];

          // Test if there is a dispose function
          if (value && typeof value.dispose === "function") {
            value.dispose();
          }
        }
      }
    });
    if (this.mixer) {
      this.mixer.stopAllAction();
    }
    this.modelScene = null;
  };
}
