//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=1;
var successes=0; successesMax=7; attempts=0; attemptsMax=3;
var score=0; scoreMax=21; scoreInc=3; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FF8040"; colorButton="#FFFFFF"; colorText="#000000"; colorSele="#FF0000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="yes yes yes...!"; messageTime="Se acabo el tiempo"; messageError="Error"; messageErrorG="Error"; messageAttempts="Lo siento se acabo el numero de intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UmVsYWNpb25hcl9GcmFzZXNfSW1fX2dlbmVz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>La Gran Muralla</p>","<p>Petra</p>","<p>El Coliseo</p>","<p>Chichen Itza</p>","<p>Machu Picchu</p>","<p>El Cristo Redentor</p>","<p>Taj Mahal</p>"];
var iL=["<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/634db1c9c2704.jpeg'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/petra.jpg'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/coliseo.jpg'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/Chichen_Itza.jpg'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/Machu_Picchu.jpg'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/cristo_redendor.jpg'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/taj_mahal.jpg'></div>"];
var order=["","","","","","",""]; orderR=["","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Jordania</p>","<p>Perú</p>","<p>China</p>","<p>Italia</p>","<p>México</p>","<p>Brasil</p>","<p>India</p>"]; ansRL=["Mg==","MA==","Mw==","NA==","MQ==","NQ==","Ng=="];
var iR=["<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/jordania.jpg'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/Per__.png'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/china.jpg'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/italia.jpg'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/mexico.jpg'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/brasil.jpg'></div>","<div  align='center'><img alt='' src='Relacionar_Frases_Im__genes_resources/media/india.jpg'></div>"];
var auR=[2,5,1,3,4,6,7];
