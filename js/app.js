var calculadora = {
	resultado : 0,
	cifra:0,
	cifra2:0,
	operacion:'',
	init: function(){
		this.asignarEventosBotones('tecla');
		pantalla= document.getElementById('display');
		
	},
	
	asignarEventosBotones: function(selector){
		var botonesPagina = document.getElementsByClassName(selector);
		for (var i = 0; i < botonesPagina.length; i++) {
		  botonesPagina[i].onclick = this.eventoMostrarContenido;
		  botonesPagina[i].onmousedown = this.reducirTamanio;
		  botonesPagina[i].onmouseup = this.aumentarTamanio;
		}
	},	
	
	aumentarTamanio: function (event){
			document.getElementById(event.target.id).style.width = (event.target.width + 3) +"px";
			document.getElementById(event.target.id).style.height = (event.target.height + 3) +"px";	

		
	},
	
	reducirTamanio: function (event){
			document.getElementById(event.target.id).style.width = (event.target.width - 3) +"px";
			document.getElementById(event.target.id).style.height = (event.target.height - 3) +"px";	
	},
  
	eventoMostrarContenido: function(event){	
		pantalla.textContent = ActualizarPantalla(event.target.id);			

		function ActualizarPantalla(tecla){		
			if(parseInt(tecla) >= 0){
				return AgregarTexto(tecla);		
			}
			else{				
				switch(tecla){	
					case "sign":
						return pantalla.textContent * -1;
					break;
					case "punto":
						return ColocarPunto();		
					break;
					case "mas":
						this.cifra = pantalla.textContent;
						BorrarPantalla();
						this.operacion = 'sumar';
					break;
					case "menos":
						this.cifra = pantalla.textContent;
						BorrarPantalla();
						this.operacion = "restar";
					break;
					case "por":
						this.cifra = pantalla.textContent;
						BorrarPantalla();
						this.operacion = "multiplicar";
					break;
					case "dividido":
						this.cifra = pantalla.textContent;
						BorrarPantalla();
						this.operacion = "dividir";
					break;
					case "on":
						this.cifra = 0;
						return 0;
					break;
					case "raiz":		
						resultado = Math.sqrt(pantalla.textContent);
						return ValidarLongitudResultado(resultado);
					break;
					case "igual":					
						if(this.cifra == undefined){
							return pantalla.textContent;
						}				
						return Operar(this.operacion, this.cifra);
					break;
				}
				
			}

			function AgregarTexto(tecla){
					if(pantalla.textContent == '0'){
						return tecla;  
					}else{
						if(pantalla.textContent.length < 8){
							return pantalla.textContent + tecla;   
						}else{				
							return pantalla.textContent;   
						}             
					}
				}

			function Operar(operacion, cifra){
				cifra2 = pantalla.textContent;				
				
				switch(operacion){			
						case "sumar":	
							resultado = parseFloat(cifra) + parseFloat(cifra2);							
						break;
						case "restar":
							resultado = parseFloat(cifra) - parseFloat(cifra2);							
						break;
						case "multiplicar":
							resultado = parseFloat(cifra) * parseFloat(cifra2);
						break;
						case "dividir":
							resultado = parseFloat(cifra) / parseFloat(cifra2);														
						break;
					}
				return ValidarLongitudResultado(resultado);
			}

			function BorrarPantalla(){
				return '';
			}

			function ColocarPunto(){
				if(pantalla.textContent.indexOf('.') == -1){
					return pantalla.textContent + '.';
				}else{
					return pantalla.textContent;
				}
			}

			function ValidarLongitudResultado(resultado){
				return resultado.toString().substr(0,8);
			}			

			
		}
	},
	

	
}


calculadora.init();
