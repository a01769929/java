function suma(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x+y;
	document.datos.opera.value="suma";
	document.datos.res.value=r;
}
function resta(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x-y;
	document.datos.opera.value="resta";
	document.datos.res.value=r;
}
function multiplicacion(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x*y;
	document.datos.opera.value="multiplicacion";
	document.datos.res.value=r;
}
function division(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x/y;
	document.datos.opera.value="division";
	document.datos.res.value=r;
}