
document.forms[0].ch1.addEventListener('focus', () => {        
    document.forms[0].ch1.value="";
})

document.forms[1].ch1.addEventListener('focus', () => {
    document.forms[1].ch1.value="";
})
/*---------------------------------*/
/*--------------------*//*EX1*/
const ex1= document.getElementById("ex1");
ex1.addEventListener('focus',()=>{
	ex1.value="";
});

/*--------------------*//*EX2*/
const ex2=document.getElementById("ex2");
ex2.addEventListener("blur",()=>{
	ex2.value=ex2.defaultValue;
})
/*--------------------*//*EX3*/
const ex3=document.getElementById('ex3');
ex3.addEventListener("keydown",()=>{
	ex3.size+=1;

})
/*--------------------*//*EX4*/

document.forms[3].cb1.addEventListener("click",()=>{
	if(document.forms[3].cb1.checked==true){
	document.forms[3].ch1.type="text";
	}else {
		document.forms[3].ch1.type="password";
	}
})
/*--------------------*//*EX5*/

const button=document.querySelector('.enfonce');
button.addEventListener('mousedown',()=>{
	document.forms[4].ch1.type="text";
})
document.addEventListener('mouseup',()=>{
	document.forms[4].ch1.type="password";
})
/*--------------------*//*EX6*/
document.forms[5].ch1.addEventListener("focus",()=>{
	document.forms[5].ch1.blur();
})

/*--------------------*//*EX7*/
document.forms[6].ch1.addEventListener("focus",()=>{
	if(document.forms[6].cb1.checked==true){
	document.forms[6].ch1.blur();
	}else{
		document.forms[6].ch1.focus()
	}
})
/*--------------------*//*EX8*/
const inc=document.getElementById('rb1_1');
const dec=document.getElementById('rb1_2');
const action=document.forms[7].b1;
document.forms[7].ch1.addEventListener("focus",()=>{
	document.forms[7].ch1.blur();
})
action.addEventListener('click',()=>{
	if(inc.checked==true){
		document.forms[7].ch1.value++;
	}else if(dec.checked==true){
		document.forms[7].ch1.value--;
	}
})

/*--------------------*//*EX9*/
const sauve=document.forms[8].b1;
const reset=document.forms[8].b2;
const ex9=document.forms[8].ch1;
sauve.addEventListener('click',()=>{
	ex9.defaultValue=ex9.value;	
})
reset.addEventListener('click',()=>{
	ex9.defaultValue="Texte initial";
})
/*--------------------*//*EX10*/

/*--------------------*//*EX11*/

/*--------------------*//*EX12*/

/*--------------------*//*EX13*/

/*--------------------*//*EX14*/

/*--------------------*//*EX15*/

/*--------------------*//*EX16*/

/*--------------------*//*EX17*/

/*--------------------*//*EX18*/

/*--------------------*//*EX19*/