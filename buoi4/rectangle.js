import Shape from "./shape.js";
export default class Rectangle extends Shape {
  constructor(name, sizeX, sizeY, background, length, width) {
    super(name, sizeX, sizeY, background);
    this.length = length;
    this.width = width;
  }
  getArea() {
    this.area = Math.abs(this.length * this.width);
  }
  draw() {
    const content = `
        <div class="alert" style="width;${this.sizeX}px";height: ${this.sizeY}px; background-color:${this.background}">
            Diện tích hình ${this.name} - Area:${this.area}
        `;
    document.getElementById("main").innerHTML = content;
  }
}
