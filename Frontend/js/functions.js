import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';

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

     
    let table = new DataTable('#tableTxt', {
        responsive: true
    });