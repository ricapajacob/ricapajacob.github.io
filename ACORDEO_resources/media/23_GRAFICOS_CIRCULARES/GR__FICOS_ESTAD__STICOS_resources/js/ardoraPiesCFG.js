//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=5;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
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
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="GAME OVER"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="SE ACABO LOS INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var uniVal=5;
var a=["MTA=","MzU=","MzU=","MzA=","MjA=","MA=="];var b=["Ny42OQ==","MjYuOTI=","MjYuOTI=","MjMuMDg=","MTUuMzg=","MA=="];
var wordsGame="R1JfX0ZJQ09TX0VTVEFEX19TVElDT1M="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var canvas = document.getElementById("ardoraCanvasPie");var context = canvas.getContext("2d");
var radius=215;var arcs=[];
var arcCenterX=[225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225];var arcCenterY=[225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225];
var arcStrokeStyles=[colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText];var arcFillStyles=[colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack];
var arcIni=[0,0.241660973353061,0.483321946706122,0.724982920059183,0.966643893412244,1.20830486676531,1.44996584011837,1.69162681347143,1.93328778682449,2.17494876017755,2.41660973353061,2.65827070688367,2.89993168023673,3.14159265358979,3.38325362694285,3.62491460029592,3.86657557364898,4.10823654700204,4.3498975203551,4.59155849370816,4.83321946706122,5.07488044041428,5.31654141376734,5.5582023871204,5.79986336047346,6.04152433382653];var arcEnd=[0.241660973353061,0.483321946706122,0.724982920059183,0.966643893412244,1.20830486676531,1.44996584011837,1.69162681347143,1.93328778682449,2.17494876017755,2.41660973353061,2.65827070688367,2.89993168023673,3.14159265358979,3.38325362694285,3.62491460029592,3.86657557364898,4.10823654700204,4.3498975203551,4.59155849370816,4.83321946706122,5.07488044041428,5.31654141376734,5.5582023871204,5.79986336047346,6.04152433382653,6.28318530717959];
var indexColor=0;var colors=["#FFFF00","#FF0000","#00FF00","#C0C0C0","#000000","#0000FF"];
