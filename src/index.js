import { arrowsController } from "./buttonLogic";
import "./styles.css";
import { domController } from "./userInterface";



export const slidesArray = [];
export const slideButtonsArray = [];

export const domRun = domController();


const slides = document.querySelectorAll(".slide");

slides.forEach(slide => {
  slidesArray.push(slide);

});
console.log(slidesArray);


// eslint-disable-next-line prefer-const, import/no-mutable-exports
export let activeSlide = slidesArray[0];

domRun.renderSlide(slidesArray[0]);



