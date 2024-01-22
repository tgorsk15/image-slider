import { slidesArray, domRun } from "./index";



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


    function backSlideChange() {


    }


    return {nextSlideChange, backSlideChange}
}



