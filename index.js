/**
 * 
 * */ 
import {easeIn, easeOut, easeInOut, linear} from "./lib/curve";
import {createDuration} from "./lib/time";
import fnName from "fn-name";

function _create(easeFun){
    return function(option){
        var {from, to, duration, onUpdate, onEnd} = Object.assign({
            duration: 1000
        }, option);

        const timer = createDuration();
        var handle = setInterval(() => {
            var percent = easeFun(timer() / duration);            
            if (timer() >= duration){
                clearInterval(handle);
                percent = 1;
            }
            onUpdate && onUpdate(from + (to - from) * percent, percent);
            percent == 1 && onEnd && onEnd(from);
        }, 30);
    }
}

var tweening = {};
[easeIn, easeOut, easeInOut, linear].map((easeFun)=>{
    tweening[fnName(easeFun)] = _create(easeFun);
});

export default tweening;