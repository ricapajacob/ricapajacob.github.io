//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=4;
var score=0; scoreMax=3; scoreInc=3; scoreDec=1
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
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="LLEGASTE AL LIMITE DE TIEMPO"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="LLEGASTE AL LIMITE DE INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#000000"; borderTime="#000000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTlfT1JERU5BUl9JTUFHRU5FUw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["SFVFVk9fRUNMT1NJT05BRE8uanBn","Q1JFQ0lETy5qcGc=","QURVTFRPLmpwZw==","Q29jb2RyaWxvc19fNV8uanBn"];
var alts=["","","",""];
var actMaxWidth="800"; actMaxHeight="600";indexG=0;profG=0;dirMedia="19_ORDENAR_IMAGENES_resources/media/";
var wordsG=[];aW=[];
