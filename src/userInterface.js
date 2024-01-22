import { slidesArray } from "./index";

// eslint-disable-next-line import/prefer-default-export
export const domController = function () {

    const nextButton = document.querySelector('.forward');
    const backButton = document.querySelector('.back');

    function renderSlide(slide) {

        slide.classList.remove('slide');
        slide.classList.add('slide-active');
        

        console.log(slide);
    }




    nextButton.addEventListener('click', () => {

    })


    return { renderSlide }
}