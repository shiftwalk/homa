import Experience from "../Experience";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import lerp from "../utils/Maths/lerp";
import fitTo from "../utils/Maths/fitTo";
import { Box3 } from "three";

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
    this.scene = this.experience.scene;
    this.time = this.experience.time;
    this.sizes = this.experience.sizes;
    this.scroll = this.experience.scroll;
    this.camera = this.experience.camera.instance;

    this.gltfLoader = new GLTFLoader();

    this.modelUrl = modelUrl;
    this.container = container;
    this.scale = scale;
    this.animationTimingModifier = animationTimingModifier;
    this.customEmissive = customEmissive;
    this.mouseMultiplicator = mouseMultiplicator;
    this.modelFaces = false;

    this.createModel();
  }

  createModel = () => {
    this.gltfLoader.load(this.modelUrl, (file) => {
      this.model = file;

      this.box3 = new Box3().setFromObject(this.model.scene);
      this.size = new THREE.Vector3();
      this.box3.getSize(this.size);

      this.resizeModel();

      if (this.customEmissive !== null) {
        this.model.scene.traverse((scene) => {
          if (scene.isMesh) {
            scene.material.emissive = new THREE.Color(this.customEmissive);
            scene.material.needsUpdate = true;
          }
        });
      }

      this.scene.add(this.model.scene);

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

  resizeModel = () => {
    this.fitter = fitTo(
      this.camera,
      this.model.scene.position.z,
      this.sizes.screen.width,
      this.sizes.screen.height
    );
    const containerRect = this.container.getBoundingClientRect();

    this.modelWidth =
      (this.fitter.width * containerRect.width) /
        this.sizes.screen.width /
        this.size.x -
      this.scale;

    this.model.scene.scale.set(
      this.modelWidth,
      this.modelWidth,
      this.modelWidth
    );

    const elementCenterX = containerRect.width / 2;
    const elementCenterY = containerRect.height / 2;
    const elementX = containerRect.left;
    const elementY = containerRect.top + window.lenis.scroll;

    const x =
      -this.sizes.viewport.width +
      elementX +
      elementCenterX * this.fitter.width;
    const y = this.sizes.screen.height / 2 - elementY - elementCenterY;

    this.model.scene.position.set(
      x / this.sizes.screen.width + this.fitter.width * 0.01,
      (y / this.sizes.screen.height) * this.fitter.height,
      this.model.scene.position.z
    );
  };

  getCoords = (elem) => {
    // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.lenis.scroll;

    var clientTop = docEl.clientTop || body.clientTop || 0;

    var top = box.top - box.height / 2 + scrollTop - clientTop;

    return { top };
  };

  update = () => {
    if (this.model) {
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
            -this.scroll.mouse.x * this.mouseMultiplicator + 0.1,
            0.07
          );

          this.model.scene.quaternion.x = lerp(
            this.model.scene.quaternion.x,
            this.scroll.mouse.y * this.mouseMultiplicator,
            0.07
          );
        }
      }

      if (this.mixer) {
        this.mixer.update(
          this.time.delta * this.animationTimingModifier +
            this.scroll.scrollForce * 0.001
        );
      }
    }
  };

  resize = () => {
    this.resizeModel();
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
