var easeTweening = require("../build/index");

test("test tweening object", (done)=>{                
    easeTweening.easeInBack({
        from: 0.1,
        to: 1,
        duration: 4000,
        onUpdate: (data, percent)=>{        
            console.log("onUpdate", data);
            try {
                expect(data).toBe(0.1 + (1 - 0.1 ) * percent);
            } catch (error) {            
    
            }            
        }, 
        onEnd: function(data){
            console.log("onEnd", data);
            expect(data).toBe(1);
            done()
        }   
    });    
});
