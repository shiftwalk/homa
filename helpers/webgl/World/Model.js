import Experience from "../Experience";
import { AnimationMixer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default class Model {
  constructor(
    modelUrl,
    section,
    xPosition,
    yPosition,
    zPosition,
    customScale,
    animationTimingModifier
  ) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.time = this.experience.time;

    this.gltfLoader = new GLTFLoader();

    this.modelUrl = modelUrl;
    this.section = section;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.zPosition = zPosition;

    this.animationTimingModifier = animationTimingModifier;

    this.customScale = customScale;

    this.createModel();
  }

  createModel = () => {
    const modelY = (this.section.offsetTop / this.sizes.screen.height) * 8;

    this.gltfLoader.load(this.modelUrl, (file) => {
      this.model = file;

      this.model.scene.scale.set(
        this.customScale,
        this.customScale,
        this.customScale
      );
      this.model.scene.position.set(
        this.xPosition,
        -modelY + this.offsetTop,
        this.zPosition
      );

      if (this.model.scene.animations) {
        this.mixer = new AnimationMixer(this.model.scene);
        const action = this.mixer.clipAction(this.model.animations[0]);
        action.play();
      }

      this.scene.add(this.model.scene);
    });
  };

  update() {
    if (this.mixer) {
      this.mixer.update(this.time.delta * this.animationTimingModifier);
    }
  }

  resize() {
    if (this.model) {
      this.model.scene.position.set(
        this.xPosition,
        (-this.section.offsetTop / this.sizes.screen.height + this.yPosition) *
          8,
        this.zPosition
      );
    }
  }
}
