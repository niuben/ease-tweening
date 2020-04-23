export var easeOut = function (x) {    
    return 1 - Math.pow(1 - x, 2);
};
  
export var easeIn = function (x) {
    return Math.pow(x, 2);
};

export var easeInOut = function (x) {
    return x - Math.sin(x * 2 * Math.PI) / (2 * Math.PI);
};

export var linear = function (x) {    
    return x;
};