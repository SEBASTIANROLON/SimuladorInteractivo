function saludar() {
    alert("¡Bienvenidos a Essen mica_p!");
}

saludar ();



function calcular(){
    let producto = prompt ("Ingresa el producto que quieras comprar \n sarten essen \n Olla 18 cm \n Olla 24 cm \n Grill \n o TOTAL para ver la suma total.");
    
    let precio=0;

    while(producto!="TOTAL"){
        switch(producto){
            case "sarten essen":
            case "SARTEN ESSEN":
                console.log("El precio de la sarten Essen es $" +20000);
                precio=precio+20000;
                break;
            case "Olla 18 cm":
            case "OLLA 18 CM":
                console.log("El precio de la Olla 18 cm Essen es $" +15000);
                precio=precio+15000;
                break;
            case "Olla 24 cm":
            case "OLLA 24 CM":
                console.log("El precio de la Olla 24 cm Essen es $" +35000);
                precio=precio+35000;
                break;
            case "Grill":
            case "GRILL":
                console.log("El precio del Grill Essen es $" +18000);
                precio=precio+18000;
                break;
            default:
                console.log("Ese producto no está disponible");
                break;
            }
    producto=prompt("Ingresa el producto que quieras comprar \n sarten essen \n Olla 18 cm \n Olla 24 cm \n Grill \n o TOTAL para ver la suma total.");
    }


console.log("Total a pagar $"+precio);
}

calcular();

let volveracomprar=prompt("Desea volver a comprar?");

if((volveracomprar=="SI")||(volveracomprar=="si")||(volveracomprar=="Si")){
    calcular ();
 
}else{
    console.log("Gracias por visitarnos");
}
