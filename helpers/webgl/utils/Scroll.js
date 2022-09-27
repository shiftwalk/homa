import Experience from "../Experience";

export default class Scroll {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scrollY = 0;

    window.addEventListener("scroll", (event) => {
      this.scrollY = -window.scrollY / this.sizes.screen.height;
    });
  }
}
