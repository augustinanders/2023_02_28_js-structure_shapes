import Currywurst from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

console.clear();
const root = document.getElementById("root");

const circleElement = Currywurst();

const squareElement = Square();

const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
