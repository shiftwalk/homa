import * as THREE from "three";

import Sizes from "./utils/Sizes";
import Time from "./utils/Time";
import Scroll from "./utils/Scroll";

import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World/World";

import debounce from "lodash/debounce";

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;

    this.canvas = canvas;

    this.sizes = new Sizes();
    this.time = new Time();
    this.scroll = new Scroll();

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

    this.debounceResize = debounce(this.debounceResize, 100);

    window.experience = this;
  }

  resize = () => {
    this.debounceResize();
  };

  debounceResize = () => {
    this.renderer.resize();
    this.camera.resize();
    this.world.resize();
  };

  update = () => {
    this.world.update();
    this.renderer.update();
    this.camera.update();
  };

  destroy = () => {
    this.renderer.destroy();
    this.camera.destroy();
    this.world.destroy();
    this.sizes.off("resize");
    this.time.off("tick");
    window.experience = null;
    instance = null;
  };

  clearPage = () => {
    this.world.destroy();
  };
}
