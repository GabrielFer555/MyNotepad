   function mensagem(msg,type=1, duration = 1000, x ="left", y ="bottom"){
        const i = new Notyf({
            duration:duration,
            position:{
                x:x,
                y:y
            },
        });
    if(type == 1){
        i.success(msg);
    }else if(type == 2){
        i.error(msg);
    }
    
    }
    function generateColor(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const background = `#${randomColor}`;
        return background
    }
