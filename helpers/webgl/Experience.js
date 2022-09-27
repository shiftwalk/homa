import * as THREE from "three";

import Sizes from "./utils/Sizes";
import Scroll from "./utils/Scroll";
import Time from "./utils/Time";

import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World/World";

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;

    this.canvas = canvas;

    this.sizes = new Sizes();
    this.scroll = new Scroll();
    this.time = new Time();

    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time.on("tick", () => {
      this.update();
    });

    this.scene = new THREE.Scene();
    this.camera = new Camera();

    this.renderer = new Renderer();
    this.world = new World();

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 1000);

    window.experience = this;
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
    this.world.resize();
  }

  update() {
    this.renderer.update();
    this.world.update();
    this.camera.update();
  }

  destroy = () => {
    this.renderer.destroy();
    this.camera.destroy();
  };
}
