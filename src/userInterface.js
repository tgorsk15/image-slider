import { slidesArray, slideButtonsArray } from "./index";
import { arrowsController, slideButtonsController } from "./buttonLogic";

// eslint-disable-next-line import/prefer-default-export
export const domController = function () {

    const arrowFunctionality = arrowsController();
    const slideButtonsRun = slideButtonsController();

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
    };


  


    nextButton.addEventListener("click", () => {

        if (slidesArray.indexOf(currentSlide) < 7) {
            arrowFunctionality.nextSlideChange(currentSlide);
        }
        
    });

    backButton.addEventListener('click', () => {

        if (slidesArray.indexOf(currentSlide) > 0) {
            arrowFunctionality.backSlideChange(currentSlide);
        }

    });



    // logic for slide Buttons
    const slideButtons = document.querySelectorAll('.slide-button');

    slideButtons.forEach(button => {
        slideButtonsArray.push(button);
        const slideButtonIndex = slideButtonsArray.indexOf(button);

        button.addEventListener('click', () => {
            slideButtonsRun.getSlideIndex(currentSlide, slideButtonIndex);
        })

    })
    console.log(slideButtonsArray);



    function checkActiveButton() {
        // left off here
    }



    return { renderSlide, resetSlides };

};
