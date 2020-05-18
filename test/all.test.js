var easeTweening = require("../build/index");
var asciichart = require("asciichart");
var funs = ["linear",
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
"easeInOutBack"]


test("test easeInQuad function", (done)=>{
    var s0 = [];
    var i = 0;
    easeTweening["easeInQuad"]({
        from: 0,
        to: 1,
        duration: 3000,
        onUpdate: function(data, percent){
            console.log(data, percent);
            s0.push([percent,data]);
            
            // expect(data).toBe(1 * percent);
        },
        onEnd: function(data, percent){                
            // s0.push(data);
            // console.log(asciichart.plot(s0));
            s0.push([percent, data]);
            console.dir(s0);
            expect(data).toBe(1 * percent);
            done();
        }
    })        
});


    

