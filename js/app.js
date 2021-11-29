var juego = prompt("¿Cuantas veces quieres jugar?");//Cantidad de juego
for(i=1; i<=juego; i++){
    var respuesta = prompt("Elige: \nPiedra \nPapel \nTijera ");//Opcion usuario
    var compu = Math.floor( Math.random()*3);//Opcion compu
    var _mensaje = "";//Mensaje a mostrar
    var eleccion;
        if(respuesta== "Piedra"){
        eleccion = 0;
        }else if(respuesta== "Papel"){
        eleccion = 1;
        }else if(respuesta== "Tijera"){
        eleccion = 2;
        }
    var elecompu;
        if(compu == 0){
        elecompu = "Piedra";
        }else if(compu == 1){
        elecompu = "Papel";
        }else if(compu == 2){
        elecompu = "Tijera";
        }
    if(eleccion === compu){
    _mensaje = "EMPATE";
    alert(_mensaje)
    document.write("Juego N°" +i+" "+_mensaje+" tu sacaste "+respuesta+" y la compu sacó "+elecompu+".<br>");
    }else {
        if(eleccion==0){
            if(compu == 1){
            _mensaje = "Perdiste!";
            document.write("Juego N°" +i+" "+_mensaje+" tu sacaste "+respuesta+" y la compu sacó "+elecompu+".<br>");
            }
            if(compu == 2){
            _mensaje = "Ganaste!";
            document.write("Juego N°" +i+" "+_mensaje+" tu sacaste "+respuesta+" y la compu sacó "+elecompu+".<br>");
            }
            alert(_mensaje)
        }
        if(eleccion==1){
            if(compu == 0){
            _mensaje = "Ganaste!";
            document.write("Juego N°" +i+" "+_mensaje+" tu sacaste "+respuesta+" y la compu sacó "+elecompu+".<br>");
            }
            if(compu == 2){
            _mensaje = "Perdiste!";
            document.write("Juego N°" +i+" "+_mensaje+" tu sacaste "+respuesta+" y la compu sacó "+elecompu+".<br>");
            }
            alert(_mensaje)
        }
        if(eleccion==2){
            if(compu == 0){
            _mensaje = "Perdiste!";
            document.write("Juego N°" +i+" "+_mensaje+" tu sacaste "+respuesta+" y la compu sacó "+elecompu+".<br>");
            }
            if(compu == 1){
            _mensaje = "Ganaste!";
            document.write("Juego N°" +i+" "+_mensaje+" tu sacaste "+respuesta+" y la compu sacó "+elecompu+".<br>");
            }
            alert(_mensaje)
        }
    }    
}