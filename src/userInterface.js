import { slidesArray, activeSlide } from "./index";
import { arrowsController } from "./buttonLogic";

// eslint-disable-next-line import/prefer-default-export
export const domController = function () {

    const arrowFunctionality = arrowsController();

    const nextButton = document.querySelector(".forward");
    const backButton = document.querySelector(".back");
    let currentSlide;



    function resetSlides() {

        slidesArray.forEach(item => {
            if (item.classList.contains('slide-active')) {
                item.classList.remove('slide-active');
                item.classList.add('slide')
            }
        });
    }


    function renderSlide(slide) {

        resetSlides();

        slide.classList.remove('slide');
        slide.classList.add('slide-active');

        currentSlide = slide;
        console.log(slide);

        return currentSlide
    }


  


    nextButton.addEventListener("click", () => {

        if (slidesArray.indexOf(currentSlide) < 7) {
            arrowFunctionality.nextSlideChange(currentSlide);
        }
        
    });

    return { renderSlide, resetSlides };
};
