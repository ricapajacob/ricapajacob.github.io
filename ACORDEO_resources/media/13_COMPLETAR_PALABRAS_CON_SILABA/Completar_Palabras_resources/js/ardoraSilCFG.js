//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=2;
var successes=0; successesMax=6; attempts=0; attemptsMax=5;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
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
var timeOnMessage=5; messageOk="Felicidades"; messageTime="Se acabo el tiempo"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="LLegaste al limite del tiempo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wGame=["-SA","-RRO","-PO","-BRO","-SO","-TE"];
var wIma=["partes-de-la-casa-en-ingles (1).jpg","PERRO.jpg","SA.jpg","LIBRO.jpg","OSO.jpeg","TOMATE.jpeg"];
var audio=["","","","","",""];
var wAlt=["","","","","",""];
var w0=["Q0E=","UEU=","U0E=","TEk=","Tw==","VE9NQQ=="];
var w1=["TkE=","VEk=","VEk=","Qkk=","Q08=","QkVCRQ=="];
var w2=["TEk=","Vkk=","VE8=","VEk=","VEk=","R1JJUw=="];
var w3=["VEk=","REU=","UEk=","QVM=","UEk=","U0VSSQ=="];
var c=[2,2,2,2,1,4];
var wW=["ERROR","ERROR","ERROR","ERROR","ERROR","ERROR"];
var dirMedia="Completar_Palabras_resources/media/";
var wordsGame="Q29tcGxldGFyX1BhbGFicmFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var ram_G=["-1","-1","-1","-1","-1","-1"]; var indexGame=0; var tiAudio=false;
