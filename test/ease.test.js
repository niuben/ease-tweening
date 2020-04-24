var easeTweening = require("../dist/tweening");



test("test tweening object", (done)=>{                
    easeTweening.easeInOut({
        from: 0.1,
        to: 1,
        duration: 4000,
        onUpdate: (data, percent)=>{        
            console.log(data);
            try {
                expect(data).toBe(0.1 + (1 - 0.1)*percent);            
            } catch (error) {            
    
            }            
        }, 
        onEnd: function(data){
            expect(data).toBe(1);
            done()
        }   
    });    
});
