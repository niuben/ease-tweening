var easeTweening = require("../build/index");

test("test tweening object", (done)=>{                
    easeTweening.linear({
        from: 0,
        to: 1,
        duration: 4000,
        onUpdate: (data, percent)=>{        
            console.log(data);
            try {
                expect(data).toBe(0.1 + (1 - 0.1) * percent);            
            } catch (error) {            
    
            }            
        }, 
        onEnd: function(data){
            expect(data).toBe(1);
            done()
        }   
    });    
});
