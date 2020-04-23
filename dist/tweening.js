'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fnName = _interopDefault(require('fn-name'));

var easeOut = function (x) {    
    return 1 - Math.pow(1 - x, 2);
};
  
var easeIn = function (x) {
    return Math.pow(x, 2);
};

var easeInOut = function (x) {
    return x - Math.sin(x * 2 * Math.PI) / (2 * Math.PI);
};

var linear = function (x) {    
    return x;
};

function createDuration(duration) {
    const startTime = new Date();
    duration = duration !== undefined ? duration : 0;
    return function () {
      return duration + new Date().getTime() - startTime.getTime();
    };
  }

/**
 * 
 * */ 

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
            percent == 1 && onEnd && onEnd(to);
        }, 30);
    }
}

var tweening = {};
[easeIn, easeOut, easeInOut, linear].map((easeFun)=>{
    tweening[fnName(easeFun)] = _create(easeFun);
});

module.exports = tweening;
