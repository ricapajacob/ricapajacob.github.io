//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=160; timeIni=160; timeBon=2;
var successes=0; successesMax=0; attempts=0; attemptsMax=3;
var score=0; scoreMax=2; scoreInc=2; scoreDec=2
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="GOO";
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
var timeOnMessage=5; messageOk="YES YES YES"; messageTime="GAY OVER"; messageError="error"; messageErrorG="error"; messageAttempts="Se termino los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UHV6bGVfTnVtX19yaWNv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var a=["0","0","0","0","2","2","2","2","1","1","1","1","2","2","2","2",];
var b=["MTE=","MTA=","OQ==","OA==","NQ==","NQ==","NQ==","NQ==","MTAw","MzAw","ODA=","MzA=","Nw==","Nw==","Nw==","Nw==",];
var c=["22","20","18","16","25","30","35","40","20","100","30","-70","14","21","28","21",];
var d=["MTE=","MTA=","OQ==","OA==","NQ==","Ng==","Nw==","OA==","ODA=","MjAw","NTA=","MTAw","Mg==","Mw==","NA==","Mw==",];
var colorSol="#FFFF00";var actualState=[];var iOp1=false;var iOp2=false;var iM=false;var iSol=false;var idiOp1=-1;var idiOp2=-1;var idiM=-1;var idiSol=-1;
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
