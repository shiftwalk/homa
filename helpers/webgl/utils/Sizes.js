import Experience from "../Experience";
import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter {
  constructor() {
    super();

    this.experience = new Experience();

    this.screen = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.viewport = {
      width: 0,
      height: 0,
    };

    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    window.addEventListener("resize", () => {
      this.screen = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const fov = this.experience.camera.instance.fov * (Math.PI / 180);
      const height =
        2 * Math.tan(fov / 2) * this.experience.camera.instance.position.z;
      const width = height * this.experience.camera.instance.aspect;

      this.viewport = {
        width,
        height,
      };

      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      if (this.experience.scroll.scrollY) {
        this.experience.scroll.scrollY = -window.scrollY / this.screen.height;
      }

      this.trigger("resize");
    });
  }
}
