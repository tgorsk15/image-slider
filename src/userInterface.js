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


    function changeActiveButton(slide) {

        const activeSlideIndex = slidesArray.indexOf(slide);
        const activeButton = slideButtonsArray[activeSlideIndex];


        slideButtonsArray.forEach(button => {
            if (button.classList.contains('slide-button-active')) {
                button.classList.remove('slide-button-active');
                button.classList.add('slide-button')
            }
        });

        activeButton.classList.remove('slide-button');
        activeButton.classList.add('slide-button-active');
        console.log(activeButton);
    }



    function renderSlide(slide) {

        resetSlides();

        slide.classList.remove('slide');
        slide.classList.add('slide-active');

        currentSlide = slide;
        console.log(slide);

        changeActiveButton(slide);

        // automaticSlideChange();

        return currentSlide
    };


    // set up automatic slide change:
    function automaticSlideChange() {
        if (slidesArray.indexOf(currentSlide) < 7) {
            arrowFunctionality.nextSlideChange(currentSlide);

            setTimeout(automaticSlideChange, 6000);
            console.log('timer ran');
        } else {
            const firstSlide = slidesArray[0];
            console.log(firstSlide);

            setTimeout(renderSlide(firstSlide), 6000);

            setTimeout(automaticSlideChange, 6000);
        }


    }



    nextButton.addEventListener("click", () => {

        if (slidesArray.indexOf(currentSlide) < 7) {
            arrowFunctionality.nextSlideChange(currentSlide);
        }
        
    });

    backButton.addEventListener('click', () => {

        if (slidesArray.indexOf(currentSlide) > 0) {
            arrowFunctionality.backSlideChange(currentSlide);

            // setTimeout(automaticSlideChange, 5000);
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


    // // set up automatic slide change:
    // function automaticSlideChange() {
    //     if (slidesArray.indexOf(currentSlide) < 7) {
    //         arrowFunctionality.nextSlideChange(currentSlide);

    //         setTimeout(automaticSlideChange, 5000);
    //         console.log('timer ran');
    //     };


    // }
    
    setTimeout(automaticSlideChange, 5000);




    return { renderSlide, resetSlides, changeActiveButton, automaticSlideChange };

};
