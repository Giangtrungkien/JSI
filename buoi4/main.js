import Shape from "./shape.js";
import Square from "./square.js";
import Circle from "./circle.js";
import Rectangle from "./rectangle.js";

function getEle(id) {
  return document.getElementById(id);
}
const renderUI = () => {
  const shape = new Shape();
  shape.draw();
};
renderUI();

getEle("areaSquare").onclick = function () {
  let side = Number(getEle("side").value);
  let x = Number(getEle("squareX").value);
  let y = Number(getEle("squareY").value);
  let color = getEle("squareColor").value;
  const square = new Square("Vuông", x, y, color, side);
  square.getArea();
  square.draw();
};

getEle("areaCircle").onclick = function () {
  let radius = Number(getEle("radius").value);
  let x = Number(getEle("squareX").value);
  let y = Number(getEle("squareY").value);
  let color = getEle("squareColor").value;
  const circle = new Circle("Tròn", x, y, color, radius);
  circle.getArea();
  circle.draw();
};

getEle("areaRec").onclick = function () {
  let length = Number(getEle("recL").value);
  let width = Number(getEle("recW").value);
  let x = NUmber(getEle("recX").value);
  let y = NUmber(getEle("recY").value);
  let color = getEle("recColor").value;
  const rectangle = new Rectangle("chữ nhật", x, y, color, length, width);
  rectangle.getArea();
  rectangle.draw();
};
