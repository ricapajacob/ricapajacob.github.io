//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60;timeIni=60; timeBon=1;
var successes=0; successesMax=8; attempts=0; attemptsMax=5;
var score=0;scoreMax=2;scoreInc=2; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="gooo";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FF8040"; colorButton="#FFFFFF"; colorText="#000000"; colorSele="#FF0000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Century Gothic, sans-serif";
var timeOnMessage=5; messageOk="yes yes yes....!!!"; messageTime="Llegaste al limite del tiempo"; messageError=""; messageErrorG=""; messageAttempts="Lo siento se termino el limite de intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="SlVFR09fREVfTUVNT1JJQQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["DEIDARA","MINATO","ITACHI","GAARA","KAKASHI","SASUKE","SHINO","LEE"];im1=["deidara.jpg","minato.jpg","itachi.png","gaara.jpg","kakashi.jpg","sasuke.jpg","shino.jpg","LEE.jpg"];mp31=["","","","","","","",""];alt1=["","","","","","","",""];
var wo2=["KAKASHI","SASUKE","MINATO","GAARA","DEIDARA","ITACHI","LEE","SHINO"];im2=["","","","","","","",""];mp32=["","","","","","","",""];alt2=["","","","","","","",""];
var cols=4; rows=4; items=8; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjQ=","MjI=","MjU=","MjM=","MjA=","MjE=","Mjc=","MjY="];
var boardGame=[["","","",""],["","","",""],["","","",""],["","","",""]]; dirMedia="JUEGO_DE_MEMORIA_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
