
var contador=0;
var imagenes=["img/foto1.jpg", "img/foto2.webp", "img/foto3.gif", "img/foto4.jpg", "img/foto5.jpg"];  //cada uno tiene un indice, (0,1,2)
var slider = setInterval("adelantar()",4000);


function adelantar(){
	if(contador==4){
		contador=0;
	}else{			  //Si no es esto
		contador++;  //++ significa +1
	}
	if(contador==0){

		boton3.style.backgroundColor="orange";
		boton4.style.backgroundColor="yellow";
		boton5.style.backgroundColor="yellow";
		boton6.style.backgroundColor="yellow";
		boton7.style.backgroundColor="yellow";

	}else if(contador==1){	//si no es esto pero es esto

		boton3.style.backgroundColor="yellow";
		boton4.style.backgroundColor="orange";
		boton5.style.backgroundColor="yellow";	
		boton6.style.backgroundColor="yellow";
		boton7.style.backgroundColor="yellow";
	

	}  else if(contador==2){

		boton3.style.backgroundColor="yellow";
		boton4.style.backgroundColor="yellow";
		boton5.style.backgroundColor="orange";
		boton6.style.backgroundColor="yellow";
		boton7.style.backgroundColor="yellow";


	}  else if(contador==3){

		boton3.style.backgroundColor="yellow";
		boton4.style.backgroundColor="yellow";
		boton5.style.backgroundColor="yellow";
		boton6.style.backgroundColor="orange";
		boton7.style.backgroundColor="yellow";


	}  else if(contador==4){

		boton3.style.backgroundColor="yellow";
		boton4.style.backgroundColor="yellow";
		boton5.style.backgroundColor="yellow";
		boton6.style.backgroundColor="yellow";
		boton7.style.backgroundColor="orange";


	}
	
	imagen.src=imagenes[contador];


}

function retroceder(){
	if(contador==0){
		contador=4;
	}else{  //si el contador no es ==0
		contador--;   //-- significa -1
	}

	imagen.src=imagenes[contador];	

	if(contador==0){

		boton3.style.backgroundColor="orange";
		boton4.style.backgroundColor="yellow";
		boton5.style.backgroundColor="yellow";
		boton6.style.backgroundColor="yellow";
		boton7.style.backgroundColor="yellow";

	}else if(contador==1){	//si no es esto pero es esto

		boton3.style.backgroundColor="yellow";
		boton4.style.backgroundColor="orange";
		boton5.style.backgroundColor="yellow";	
		boton6.style.backgroundColor="yellow";
		boton7.style.backgroundColor="yellow";
	

	}  else if(contador==2){

		boton3.style.backgroundColor="yellow";
		boton4.style.backgroundColor="yellow";
		boton5.style.backgroundColor="orange";
		boton6.style.backgroundColor="yellow";
		boton7.style.backgroundColor="yellow";


	}  else if(contador==3){

		boton3.style.backgroundColor="yellow";
		boton4.style.backgroundColor="yellow";
		boton5.style.backgroundColor="yellow";
		boton6.style.backgroundColor="orange";
		boton7.style.backgroundColor="yellow";


	}  else if(contador==4){

		boton3.style.backgroundColor="yellow";
		boton4.style.backgroundColor="yellow";
		boton5.style.backgroundColor="yellow";
		boton6.style.backgroundColor="yellow";
		boton7.style.backgroundColor="orange";


	}
}


function programa(){
	boton1.addEventListener("click", retroceder);  //primero de quien y luego la caracteristica
	boton2.addEventListener("click", adelantar);
	boton3.addEventListener("click", ponerFoto1);
	boton4.addEventListener("click", ponerFoto2);
	boton5.addEventListener("click", ponerFoto3);
	boton6.addEventListener("click", ponerFoto4);
	boton7.addEventListener("click", ponerFoto5);
}

function ponerFoto1(){
	contador=0;  //es imporante actualizar el contador, para saber en que imagen estoy
	imagen.src=imagenes[0];
	boton3.style.backgroundColor="orange";
	boton4.style.backgroundColor="yellow";
	boton5.style.backgroundColor="yellow";
	boton6.style.backgroundColor="yellow";
	boton7.style.backgroundColor="yellow";
}

function ponerFoto2(){
	contador=1;	 //es imporante actualizar el contador, para saber en que imagen estoy
	imagen.src=imagenes[1];
	boton4.style.backgroundColor="orange";
	boton3.style.backgroundColor="yellow";
	boton5.style.backgroundColor="yellow";
	boton6.style.backgroundColor="yellow";
	boton7.style.backgroundColor="yellow";
}

function ponerFoto3(){
	contador=2;	 //es imporante actualizar el contador, para saber en que imagen estoy
	imagen.src=imagenes[2];
	boton5.style.backgroundColor="orange";
	boton4.style.backgroundColor="yellow";
	boton3.style.backgroundColor="yellow";
	boton6.style.backgroundColor="yellow";
	boton7.style.backgroundColor="yellow";
}

function ponerFoto4(){
	contador=3;	 //es imporante actualizar el contador, para saber en que imagen estoy
	imagen.src=imagenes[3];
	boton5.style.backgroundColor="yellow";
	boton4.style.backgroundColor="yellow";
	boton3.style.backgroundColor="yellow";
	boton6.style.backgroundColor="orange";
	boton7.style.backgroundColor="yellow";
}

function ponerFoto5(){
	contador=4;	 //es imporante actualizar el contador, para saber en que imagen estoy
	imagen.src=imagenes[4];
	boton5.style.backgroundColor="yellow";
	boton4.style.backgroundColor="yellow";
	boton3.style.backgroundColor="yellow";
	boton6.style.backgroundColor="yellow";
	boton7.style.backgroundColor="orange";
}


window.addEventListener("load", programa);
 










