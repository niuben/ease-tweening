import {createDuration} from "./lib/time";
import tweenFunctions from "tween-functions";

function _create(easeFun){
    return function(option){
        var {from, to, duration, onUpdate, onEnd} = Object.assign({
            duration: 1000
        }, option);

        const timer = createDuration();
                
        var handle = setInterval(() => {
            
            var time = timer();
            var percent = time / duration;

            var passingValue = tweenFunctions[easeFun](time, from, to, duration);            
            if (time >= duration){
                clearInterval(handle);
                passingValue = to;
                percent = 1;
                onEnd && onEnd(passingValue, percent);
                return;
            }            
            onUpdate && onUpdate(passingValue, percent);             
        }, 30);
    }
}

var tweening = {};
["linear",
"easeInQuad",
"easeInCubic",
"easeInQuart",
"easeInQuint",
"easeInSine",
"easeInExpo",
"easeInCirc",
"easeInBounce",
"easeInElastic",
"easeInBack",
"easeOutQuad",
"easeOutCubic",
"easeOutQuart",
"easeOutQuint",
"easeOutSine",
"easeOutExpo",
"easeOutCirc",
"easeOutBounce",
"easeOutElastic",
"easeOutBack",
"easeInOutQuad",
"easeInOutCubic",
"easeInOutQuart",
"easeInOutQuint",
"easeInOutSine",
"easeInOutExpo",
"easeInOutCirc",
"easeInOutBounce",
"easeInOutElastic",
"easeInOutBack"].map((easeFun)=>{
    tweening[easeFun] = _create(easeFun);
});

export default tweening;