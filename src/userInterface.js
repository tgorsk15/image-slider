import { slidesArray } from "./index";

// eslint-disable-next-line import/prefer-default-export
export const domController = function () {

    function renderSlide(slide) {
        console.log(slide);
    }



    return { renderSlide }
}