import "./styles.css";
import { domController } from "./userInterface";



export const slidesArray = [];
const domRun = domController();

const slides = document.querySelectorAll(".slide");

slides.forEach(slide => {
  slidesArray.push(slide);

});
console.log(slidesArray);

console.log(slidesArray[0])

domRun.renderSlide(slidesArray[0])


