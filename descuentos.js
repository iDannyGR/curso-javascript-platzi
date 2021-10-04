// funciones
function descuento (precio, porcentaje){
    let respuesta = document.getElementById('respuesta');
        let desApli = (porcentaje * precio) / 100;
        let  valorFinal = precio - desApli;
        respuesta.innerHTML = `el descuento es ${desApli},</br> y el valor final es ${valorFinal}`;
};

    //evento load
window.addEventListener('load',()=>{
        let getDescuento = document.getElementById('aplDescuento');
        
    //evento click
    getDescuento.addEventListener('click', ()=>{
        let price = document.querySelector('#precio').value;
        let percen = document.querySelector('#porcentaje').value;
        let respuesta = document.getElementById('respuesta');  
           
        if(price == '' || percen == '' ){
            respuesta.innerHTML = 'Datos Erroneos';
        }else{
        descuento(price,percen);
        }

    });
});