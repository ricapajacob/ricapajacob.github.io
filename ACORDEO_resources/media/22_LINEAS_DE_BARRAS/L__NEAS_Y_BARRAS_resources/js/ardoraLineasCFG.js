//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=4;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="GOOOO";
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
var timeOnMessage=5; messageOk="CONGRATULATIONS"; messageTime="GAME OVER"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="GAME O"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TF9fTkVBU19ZX0JBUlJBUw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var graph;var axes;var dPoints=[];var dPointsState=[];var stateMouse=-1;var mouseX=0;var mouseY=0;
var yStep=50;var xPadding=0;var yPadding = 30;var hFont=10;var iniAxe=0;
var yStepDiv=10;
var maxY=150;
var c1=["MzA=","MTA=","MTAw","ODA=","ODA="];
var c2=["MzA=","MjA=","MTA=","MTA=","MTAw"];
var c3=["MTAw","NTA=","MzA=","MTAw","MA=="];
var data={ values:[{X:"JACOB",Y:30},{X:"CARLOS",Y:10},{X:"JACK",Y:100},{X:"CESAR",Y:80},{X:"PILAR",Y:80},]};
var data2={ values:[{X:"JACOB",Y:30},{X:"CARLOS",Y:20},{X:"JACK",Y:10},{X:"CESAR",Y:10},{X:"PILAR",Y:100},]};
var dPoints2=[];var dPoints2State=[];
var data3={ values:[{X:"JACOB",Y:100},{X:"CARLOS",Y:50},{X:"JACK",Y:30},{X:"CESAR",Y:100},{X:"PILAR",Y:0},]};
var dPoints3=[];var dPoints3State=[];
var wBar=0;var nBar=3;
var selectedG=0;
