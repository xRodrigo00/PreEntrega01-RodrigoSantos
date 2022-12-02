function mayor(edad){
    if(edad >= 18){
        return 'Se cumple'
    }
    else{
        return 'No se cumple'
    }
}
let resultado = mayor(12)
console.log(resultado)
 resultado = mayor(18)
 console.log(resultado)

/*  function descuentos(disponibilidad, descuento){
    if(disponibilidad == 'si' && descuento == 15){
        return precio_IVA() - (precio_IVA() * 0.15)
    }
    else if(disponibilidad == 'si' && descuento == 20){
        return (precio * IVA) - (precio * IVA * 0.20)  
    }
    if(disponibilidad == 'si' && descuento == 25){
        return (precio * IVA) - (precio * IVA * 0.25)  
    }
    if(disponibilidad == 'no'){
        return precio * IVA
    }
    else{
        console.log('NO DISPONIBLE')
    }
} */
