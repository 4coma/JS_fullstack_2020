
document.getElementById('pair').addEventListener('click',executepair);
document.getElementById('biss').addEventListener('click',executebissextile);
document.getElementById('conv').addEventListener('click',executeconvertisseur);
document.getElementById('equa').addEventListener('click',executeequation);
document.getElementById('som').addEventListener('click',executesommedeuxnombres);
document.getElementById('Ad').addEventListener('click',executeaddition);
document.getElementById('Sous').addEventListener('click',executesoustraction);
document.getElementById('Mult').addEventListener('click',executemultiplication);
document.getElementById('Div').addEventListener('click',executedivision);
document.getElementById('Divr').addEventListener('click',executedivisionetreste);
document.getElementById('Exp').addEventListener('click',executeexposant);


function executepair() {
	const nbre1=Number(document.getElementById('nbp').value);
	document.getElementById("Nbpair").value = pair(nbre1);

}

function executebissextile(){
	const nbre2=Number(document.getElementById('nbi').value);
	document.getElementById("Bissextile").value = bissextile(nbre2);
}

function executeconvertisseur(){
	const nbre3=Number(document.getElementById('nbc').value);
	document.getElementById("Convertisseur").value = convertisseur(nbre3);
}

function executeequation(){
	const nbre4=Number(document.getElementById('a').value);
	const nbre5=Number(document.getElementById('b').value);
	document.getElementById("Equation").value = equation(nbre4, nbre5);
}

function executesommedeuxnombres(){
	const nbre6=Number(document.getElementById('nbs1').value);
	const nbre7=Number(document.getElementById('nbs2').value);
	document.getElementById("Somme2nombres").value = somdeuxnombres(nbre6, nbre7);
}

function executeaddition(){
	const nbre8=Number(document.getElementById('nbad1').value);
	const nbre9=Number(document.getElementById('nbad2').value);
	document.getElementById("Adcalculette").value = addition(nbre8, nbre9);
}

function executesoustraction(){
	const nbre10=Number(document.getElementById('nbsous1').value);
	const nbre11=Number(document.getElementById('nbsous2').value);
	document.getElementById("Souscalculette").value = soustraction(nbre10, nbre11);
}

function executemultiplication(){
	const nbre12=Number(document.getElementById('nbmult1').value);
	const nbre13=Number(document.getElementById('nbmult2').value);
	document.getElementById("Multcalculette").value = multiplication(nbre12, nbre13);
}

function executedivision(){
	const nbre14=Number(document.getElementById('nbdiv1').value);
	const nbre15=Number(document.getElementById('nbdiv2').value);
	document.getElementById("Divcalculette").value = division(nbre14, nbre15);
}

function executedivisionetreste(){
	const nbre16=Number(document.getElementById('nbdivr1').value);
	const nbre17=Number(document.getElementById('nbdivr2').value);
	document.getElementById("Divrcalculette").value = divisionreste(nbre16, nbre17);
}

function executeexposant(){
	const nbre18=Number(document.getElementById('nbexp1').value);
	const nbre19=Number(document.getElementById('nbexp2').value);
	document.getElementById("Expcalculette").value = exposant(nbre18, nbre19);

}

function pair(nbre1) {
	var rep = "";
	if (nbre1%2==0) {
		rep = "pair";
	} else {
		rep = "impair";
	}

	return rep;
}

function bissextile(nbre2) {
	let annee = "";
	if (nbre2 % 400 === 0 || (nbre2 % 4 === 0 && nbre2 % 100 != 0)) {
		annee = "bissextile";
	} else {
		annee = "non bissextile";
	}

	return annee;
}

function convertisseur(nbre3) {
	let ans;
	let mois;
	let jour;
	let heure;
	let minute;
	let temps;

	ans = Math.trunc(nbre3/31536000);
	nbre3 %= 31536000; 
	mois = Math.trunc(nbre3/2678400);
	nbre3 %= 2678400;
	jour = Math.trunc(nbre3/86400);
	nbre3 %= 86400; 
	heure = Math.trunc(nbre3/3600);
	nbre3 %= 3600;
	minute = Math.trunc(nbre3/60);
	nbre3 %=60;

	temps = ( ans + " AN(S) " + mois + " MOIS " + jour + " J " + heure + " H " + minute + " MIN " + nbre3 + " S " );

	return temps;
}

function equation(nbre4, nbre5) {
	let reponse;

	if (nbre4==0 && nbre5!=0) {
    	reponse = "Solution impossible";
	}
	if (nbre4==0 && nbre5==0) {
   	 	reponse = "X peut prendre n'importe quelle valeur";
	}
	if (nbre4!=0 && nbre5!=0) {
    	reponse = (" x = " + (-nbre5/nbre4));
	}

	return reponse;
}

function somdeuxnombres(nbre6, nbre7){
	let temp;
	let temp2;
	let somme = 0;
	let total;

	temp = nbre6;
	temp2 = nbre7;

	if (nbre6>nbre7){
	    while (nbre6>=nbre7){
	        somme=somme+nbre7;
	        nbre6=nbre6-1;
	    }
	}

	if (nbre7>nbre6){
	    while (nbre7>=nbre6){
	        somme=somme+nbre7;
	        nbre7=nbre7-1;
	    }
	}

	if (nbre6==nbre7){
	    total = ("La somme des nombres compris entre " + nbre6 + " et " + nbre7 + " est 0 ")
	}
	else{
	    total = ("La somme des nombres compris entre " + temp + " et " + temp2 + " est " + somme)
	}

	return total;
}

function addition(nbre8, nbre9) {
	let Rad;
	Rad = nbre8 + nbre9;

	return Rad;
}

function soustraction(nbre10, nbre11){
	let Rsous;
	Rsous = nbre10 - nbre11;

	return Rsous;
}

function multiplication(nbre12, nbre13){
	let Rmult;
	Rmult = nbre12*nbre13;

	return Rmult;
}

function division(nbre14, nbre15){
	let Rdiv;
	Rdiv = nbre14/nbre15;

	return Rdiv;
}

function divisionreste(nbre16, nbre17){
	let Rdivr;
	let R;
	let reponse;

	R = nbre16%nbre17;
	Rdivr = Math.trunc(nbre16/nbre17);
	reponse = ( Rdivr + " R= " + Rdivr );


	return reponse;

}

function exposant(nbre18, nbre19){
	let Rexp;
	Rexp = Math.pow(nbre18, nbre19);

	return Rexp;
}