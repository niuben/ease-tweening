import {createDuration} from "./lib/time";
var tweenFunctions = require("tween-functions");

function _create(easeFun){
    return function(option){
        var {from, to, duration, onUpdate, onEnd} = Object.assign({
            duration: 1000
        }, option);

        const timer = createDuration();
                
        var handle = setInterval(() => {
            
            var time = timer();
                        
            var passingValue = tweenFunctions[easeFun](time, to, from, duration);            
            if (time >= duration){
                clearInterval(handle);
                passingValue = to;
            }
            onUpdate && onUpdate(passingValue, time / duration);
            percent == 1 && onEnd && onEnd(to);
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