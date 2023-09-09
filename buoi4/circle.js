import Shape from "./shape.js";
export default class Circle extends Shape {
  constructor(name, sizeX, sizeY, background, radius) {
    super(name, sizeX, sizeY, background);
    this.radius = radius;
  }
  getArea() {
    this.area = Math.pow(this.radius, 2);
  }
  draw() {
    const content = `
        <div class="alert" style="width;${this.sizeX}px";height: ${this.sizeY}px; background-color:${this.background}">
            Diện tích hình ${this.name} - Area:${this.area}
        `;
    document.getElementById("main").innerHTML = content;
  }
}
