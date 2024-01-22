import "./styles.css";

// console.log("Why are we still here?");
// console.log("Yes");

// function templateStarter() {
//   console.log("is Prettier working?");
// }

// function newList() {
//   console.log("yay");
// }

export const slidesArray = [];

const slides = document.querySelectorAll(".slide");

slides.forEach(slide => {
  slidesArray.push(slide);

});
console.log(slidesArray);


