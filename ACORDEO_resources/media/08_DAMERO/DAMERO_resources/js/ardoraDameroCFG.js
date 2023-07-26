//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=4;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="yes yes yes....!!!"; messageTime="GAME OVER...!!1"; messageError=""; messageErrorG=""; messageAttempts="GAME OVER!!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var xCell=["RQ==","TA==","IA==","TQ==","RQ==","Sg==","Tw==","Ug==","IA==","TQ==","Tw==","TQ==","RQ==","Tg==","VA==","Tw==","IA==","RA==","RQ==","TA==","IA==","RA==","w40=","QQ==","IA==","RQ==","Uw==","IA==","QQ==","SA==","Tw==","Ug==","QQ=="];
var que=["¿Cuál es el anime más popular de todos los tiempos?","¿Cuál es el anime más vendido en la historia?","¿Quién es el personaje principal de \"Naruto\"?","¿Cuál es el poder principal de Goku en \"Dragon Ball\"?","¿Quién es el villano principal en \"Death Note\"?","¿Cuál es el nombre del protagonista en \"One Punch Man\"?","¿En qué ciudad se desarrolla la trama de \"Fullmetal Alchemist\"?"];
var yCell=["T05FIFBJRUNF","RFJBR09OIEJBTEw=","TkFSVVRP","U1VQRVIgU0FJWUFKSU4=","TElHSFQgWUFHQU1J","U0FJVEFNQQ==","QU1FU1RSSVM="];
var pos=[["7","14","1","3","0","0","5","0","13"],["18","8","24","0","11","0","9","0","29","2","20"],["0","0","32","0","15","16"],["27","0","0","19","0","17","0","0","0","0","0","6","0","0"],["0","0","0","30","0","21","0","0","0","0","4","0"],["0","0","0","0","0","10","0"],["0","12","26","0","0","0","0","0"]];
var upos=[["","","","","","","","",""],["","","","","","","","","","",""],["","","","","",""],["","","","","","","","","","","","","",""],["","","","","","","","","","","",""],["","","","","","",""],["","","","","","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var colCount=20;
var showE=true;
var typeD=1;var tiCor=true;
var colDef=0; col=1; row=1; inQue=0; colorError="#C0C0C0";
var wordsGame="REFNRVJP"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
