import { slidesArray, activeSlide } from "./index";
import { arrowsController } from "./buttonLogic";

// eslint-disable-next-line import/prefer-default-export
export const domController = function () {

    const arrowFunctionality = arrowsController();

    const nextButton = document.querySelector(".forward");
    const backButton = document.querySelector(".back");
    let currentSlide;



    function renderSlide(slide) {
        slide.classList.remove("slide");
        slide.classList.add("slide-active");

        currentSlide = slide;
        console.log(slide);

        return currentSlide
    }



    nextButton.addEventListener("click", () => {

        arrowFunctionality.nextSlideChange(currentSlide);
        
    });

    return { renderSlide };
};
