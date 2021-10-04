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
        let cupon = [
            {name:'verano_feliz',
            des: 15},
            {name:'invierno_congelado',
            des: 25},
            {name:'octubre_terror',
            des: 5}
        ];


    //evento click
    getDescuento.addEventListener('click', ()=>{
        let price = document.querySelector('#precio').value;
        let percen = document.querySelector('#porcentaje').value;
        let respuesta = document.getElementById('respuesta');  
        let extraDes= document.querySelector('#cupon').value;

        if(price == '' || percen == '' ){
            respuesta.innerHTML = 'Datos Erroneos';
        }else{
            
        descuento(price,percen);
        }

    });
});