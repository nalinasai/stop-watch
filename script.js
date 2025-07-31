var startbutton = document.getElementById("start")
var stopbutton = document.getElementById("stop")
var resetbutton = document.getElementById("reset")
var h = document.getElementById("hour")
var m = document.getElementById("minute")
var s = document.getElementById("second")


let timer = null
function updatesecond(){
    
    
        let svalue = Number(s.innerText) + 1
        if(svalue<10){
            s.innerText = "0" + svalue
        }
        else{
            s.innerText = svalue
        }
        
        if(svalue==60){
            s.innerText = "00"
            
            function updateminute(){
                let mvalue = Number(m.innerText) + 1
                if(mvalue<10){
                    m.innerText = "0" + mvalue
                }
                else{
                    m.innerText = mvalue
                }

                if(mvalue==60){
                    m.innerText="00"
                    
                    function updatehour(){
                        let hvalue = Number(h.innerText) + 1
                        if(hvalue<10){
                            h.innerText = "0" + hvalue
                        }
                        else{
                            h.innerText = hvalue
                        }
                        
                    }
                    if(!timer){
                        updatehour()
                    }
                }
            }
            if(!timer){
                updateminute()
            }



        }
        
        timer = setTimeout(()=>{
            updatesecond()
        },1000)
    }


function start(button){
    if(!timer){
        
        updatesecond()
    }
    
    
}

function stop(){
    clearTimeout(timer)
    timer = null
}

function reset(){
    stop()
    h.innerText = "00"
    m.innerText = "00"
    s.innerText = "00"
    
    
}