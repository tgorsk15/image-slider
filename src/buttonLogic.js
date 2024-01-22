import { slidesArray, domRun, slideButtonsArray } from "./index";



// eslint-disable-next-line import/prefer-default-export
export const arrowsController = function () {
    

    function nextSlideChange(currentSlide) {
        console.log('it has changed');
        console.log(currentSlide);
        
          
        const newActiveSlide = slidesArray.indexOf(currentSlide) + 1;
        console.log(newActiveSlide);

        const newCurrentSlide = slidesArray[newActiveSlide];
        console.log(newCurrentSlide);

        domRun.renderSlide(newCurrentSlide);


    }


    function backSlideChange(currentSlide) {

        const newActiveSlide = slidesArray.indexOf(currentSlide) - 1;
        console.log(newActiveSlide);

        const newCurrentSlide = slidesArray[newActiveSlide];
        console.log(newCurrentSlide);

        domRun.renderSlide(newCurrentSlide);

    }


    return {nextSlideChange, backSlideChange}
}



export const slideButtonsController = function () {


    function getSlideIndex(currentSlide, buttonIndex) {
        console.log('the slide has been got');
        console.log(currentSlide);
        console.log(buttonIndex);

        const newCurrentSlide = slidesArray[buttonIndex];
        console.log(newCurrentSlide);

        domRun.renderSlide(newCurrentSlide);

    };


    return { getSlideIndex }

}



