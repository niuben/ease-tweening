# ease-tweening
a light lib of tweening

![Node.js CI](https://github.com/niuben/ease-tweening/workflows/Node.js%20CI/badge.svg)

## API

create tweening

```js
var easeNameTweening = tweening.easeName({
    from: number, //required
    to: number, //required
    duration:  millisecond  //optional default: 1000
    onUpdate: function(data, percent){ }, //optional
    onEnd: function(data){}  //optional
})
```

## Example

```js
var easeTweening = require("ease-tweening");
var easeInTween = easeTweening.easeIn({
  to: 1,
  from: 1000,
  duration: 5000,
  onUpdate: function (data, percent) {
    console.log(data);
  },
});
```

list of easeName

- linear
- easeInQuad
- easeInCubic
- easeInQuart
- easeInQuint
- easeInSine
- easeInExpo
- easeInCirc
- easeInBounce
- easeInElastic
- easeInBack
- easeOutQuad
- easeOutCubic
- easeOutQuart
- easeOutQuint
- easeOutSine
- easeOutExpo
- easeOutCirc
- easeOutBounce
- easeOutElastic
- easeOutBack
- easeInOutQuad
- easeInOutCubic
- easeInOutQuart
- easeInOutQuint
- easeInOutSine
- easeInOutExpo
- easeInOutCirc
- easeInOutBounce
- easeInOutElastic
- easeInOutBack

Thanks for [tween-functions](https://www.npmjs.com/package/tween-functions)

![曲线](https://niuben.github.io/ease-tweening/demo/download.png)

