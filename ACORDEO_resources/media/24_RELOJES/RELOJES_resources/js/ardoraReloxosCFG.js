//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="GOOO";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FF8040"; colorButton="#FFFFFF"; colorText="#000000"; colorSele="#FF0000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Gill Sans / Gill Sans MT, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";var messageNext="";
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="GAY OVER"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="GAY OVER"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var tiAudio=false;var wordsGame="UkVMT0pFUw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var d=[-1,-1,-1,-1,-1,-1];var indexE=0;var rad=450;var c=[45,45,45,0,30,45];var a=["Son las nueve menos cuarto","La diez menos cuartto","Son las once menoscuarto","Las nueve en punto","Las doce y media","Cuarto pa las doce"];var b=[8,9,10,9,12,11];
var canvasRB; var canvasR; var contextRB; var contextR;var canvasDB; var canvasD; var contextDB; var contextD;
var posM=0;var posH=0;var posMD=0;var posHD=0;
var colorM="#0000A0";var colorH="#FF0000";var rad=450;
var mp3S=["","","","","",""];var ogg3S=["","","","","",""];
