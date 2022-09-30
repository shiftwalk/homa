import Experience from "../Experience";
import normalizeWheel from "normalize-wheel";
import debounce from "lodash/debounce";
import lerp from "./Maths/lerp";

export default class Scroll {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;

    this.scrollForce = 1;

    this.mouse = {
      x: 0,
      y: 0,
    };

    window.addEventListener("mousewheel", this.onMouseWheel);
    window.addEventListener("mousemove", this.onMouseMove);

    this.onCheckDebounce = debounce(this.resetWheel, 100);
  }

  onMouseWheel = () => {
    const normalized = normalizeWheel(event);
    this.scrollForce = lerp(
      this.scrollForce,
      Math.max(1, normalized.pixelY),
      0.075
    );
    this.onCheckDebounce();
  };

  resetWheel = () => {
    this.scrollForce = 1;
  };

  onMouseMove = (event) => {
    if (this.sizes) {
      this.mouse = {
        x: (event.clientX / this.sizes.screen.width) * 2 - 1,
        y: (event.clientY / this.sizes.screen.height) * 2 - 1,
      };
    }
  };

  destroy = () => {
    window.removeEventListener("mousewheel", this.onMouseWheel);
  };
}
