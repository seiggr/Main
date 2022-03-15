let isSlidingNow = false;
const slidesAll = document.querySelectorAll(".slide");
const sliderContainer = document.querySelector(".slider-container");



// Only for desktop:
if (document.documentElement.clientWidth > 768) {
    const slide = document.querySelector(".slide");
    const leftBtnSlider = document.querySelector("#leftBtnSlider");
    const rightBtnSlider = document.querySelector("#rightBtnSlider");
    const marginR = getComputedStyle(slide).marginRight;
    const marginL = getComputedStyle(slide).marginLeft;

    const stringToNumber = function (arg) {
        arg = arg.slice(0, arg.indexOf('px'));
        return Number(arg);
    }

    // Multiplier for shifting (this number of slides will shift relative to the starting position 0 along the X axis 
    let counter = 1;

    // Immediately shift to the second slide + given margins between elements
    const slideWidth = slidesAll[0].clientWidth + stringToNumber(marginR) + stringToNumber(marginL);
    sliderContainer.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';

    // Controls
    rightBtnSlider.addEventListener('click', () => {
        // Checking if too many clicks, return from listener and event doesn't count
        if (counter >= slidesAll.length -4) return;
        sliderContainer.style.transition = "transform 0.4s ease-in-out";
        counter++;
        sliderContainer.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
        console.log('counter(rightBtn): ', counter);
    });

    leftBtnSlider.addEventListener('click', () => {
        if (counter <= 0) return;
        sliderContainer.style.transition = "transform 0.4s ease-in-out";
        counter--;
        sliderContainer.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
        console.log('counter(leftBtn): ', counter);
    });

    /* TOUCHES - not used now
    
    let clickPos = 0;
    let isCounterChanged = false;
    let sliderContainerStyle = window.getComputedStyle(sliderContainer);
    let matrix = new WebKitCSSMatrix(sliderContainerStyle.transform);
    let shiftValueRight = slideWidth * 2;
    let shiftValueLeft = 0;
    let difference = matrix.m41;
    let alreadyShifted = matrix.m41;
    // console.log(
    //     'BEFORE SHIFTING CL:',
    //     '\ncounter: ', counter, 
    //     '\nDifferenece: ', difference,
    //     '\nshiftValue1: ', shiftValueRight, 
    //     '\nshiftValue2: ', shiftValueLeft, 
    //     '\nuserShift: 0',
    // );

    const shiftingFunc = function (event) {
        // Flag for preventing click on element while sliding 
        isSlidingNow = true;
        // Remembering click position 
        if (clickPos === 0) clickPos = event.clientX;

        let userShift = clickPos - event.clientX;
        difference = matrix.m41 - userShift;
        sliderContainer.style.transform = 'translateX(' + difference + 'px)';

        // Changing the counter during shifting
        if (userShift > 0 && Math.abs(difference) > shiftValueRight && !isCounterChanged) {
            counter++;
            shiftValueRight += slideWidth;
            shiftValueLeft += slideWidth;
            isCounterChanged = true;
            console.log('counter(shiftingFunc - RIGHT): ', counter);
        } else if (userShift < 0 && Math.abs(difference) < shiftValueLeft && !isCounterChanged) { 
            counter--;
            shiftValueRight -= slideWidth;
            shiftValueLeft -= slideWidth;
            isCounterChanged = true;
            console.log('counter(shiftingFunc - LEFT): ', counter);
        }

        // console.log(
        //     'SHIFTING CL:',
        //     '\ncounter: ', counter, 
        //     '\nDifferenece: ', difference, 
        //     '\nmatrix.m41: ', matrix.m41,
        //     '\nshiftValue1: ', shiftValueRight, 
        //     '\nshiftValue2: ', shiftValueLeft, 
        //     '\nuserShift: ', userShift
        // );
    }

    const endShifting = function () {
        // if (counter <= 0 || counter >= slidesAll.length -4) return;
        if (Math.abs(difference) > Math.abs(alreadyShifted)) {
            console.log('cond1');
            sliderContainer.style.transition = "transform 0.4s ease-in-out";
            if (!isCounterChanged) counter++;
            shiftValueRight += slideWidth;
            shiftValueLeft += slideWidth;
            sliderContainer.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
            console.log('counter(endShifting - RIGHT): ', counter);
        } else if (Math.abs(difference) < Math.abs(alreadyShifted)) {
            console.log('cond2');
            sliderContainer.style.transition = "transform 0.4s ease-in-out";
            if (!isCounterChanged) counter--;
            shiftValueRight -= slideWidth;
            shiftValueLeft -= slideWidth;
            sliderContainer.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
            console.log('counter(endShifting - LEFT): ', counter);
        }

        isCounterChanged = false;
        clickPos = 0;
        touchZone.removeEventListener('mousemove', shiftingFunc, false);  

        // console.log(
        //     'END SHIFTING CL:',
        //     '\ncounter: ', counter, 
        //     '\nDifferenece: ', difference,
        //     '\nmatrix.m41: ', matrix.m41,
        //     '\nshiftValue1: ', shiftValueRight, 
        //     '\nshiftValue2: ', shiftValueLeft, 
        //     '\nuserShift: 0',
        // );
    }

    touchZone.addEventListener('mousedown', function() {
        touchZone.addEventListener('mousemove', shiftingFunc);
    });

    touchZone.addEventListener('mouseup', function() {
        endShifting();
    });
    */

    sliderContainer.addEventListener('transitionend', () => {
        if (slidesAll[counter].id === 'lastClone') {
            sliderContainer.style.transition = "none";
            counter = slidesAll.length -5;
            sliderContainer.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
        }
        if (slidesAll[counter].id === 'firstClone') {
            sliderContainer.style.transition = "none";
            counter = 1;
            sliderContainer.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
        }   
        sliderContainerStyle = window.getComputedStyle(sliderContainer);
        matrix = new WebKitCSSMatrix(sliderContainerStyle.transform);
        alreadyShifted = matrix.m41;
    });
}

 

