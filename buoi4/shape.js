export default class Shape {
  constructor(name, sizeX, sizeY, background) {
    this.name = name;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.background = background;
    this.area = 0;
  }
  getArea() {
    this.area = 0;
  }
  draw() {
    const content = `
        <div class="alert alert-primary">
        chưa có kết quả
        </div>`;
    document.getElementById("main").innerHTML = content;
  }
}
