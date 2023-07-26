//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=2;
var successes=0; successesMax=2; attempts=0; attemptsMax=2;
var score=0; scoreMax=2; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
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
var fPreg="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES POR TERMINAR"; messageTime="LIMITE DE TIEMPO LO SIENTO";messageError="ERROR";messageErrorG="ERROR"; messageAttempts="LLEGASTRE AL LIMITE DE TIEMPO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var actMaxWidth="600"; actMaxHeight="";indexQ=0;dirMedia="SELECCIONAR_IMAGENES_SONIDO_resources/media/";
var quest=[["¿CUALES SON LOS POKEMONES DE FUEGO?","",""],["¿CUALES SON LOS POKEMONES DE AGUA?","",""]];
var altQuest=["",""];
var media=[["MQ==","Q0hBUklaQVJE","0_CHARI.png","X"],["Mg==","TlVNRUw=","0_NUMEL.png","X"],["Mw==","TUlMT1RJQw==","0_MILOTIC.jpg","X"],["NA==","TUFHTUFS","0_MAGMAR.jpg","X"],["NQ==","RU5URUk=","0_ENTEI.png","X"],["Ng==","R1lBUkFET1M=","0_GYARADOS.jpg","X"],["Nw==","UElHTklURQ==","0_PIGNITE.png","X"]];
var alt=["","","","","","",""];
var dat=[["MQ==","MQ==","MQ==","MQ==","MQ==","MQ=="],["MQ==","Mg==","MQ==","MQ==","MQ==","MQ=="],["MQ==","Mw==","MA==","MQ==","MQ==","MQ=="],["MQ==","NA==","MQ==","MQ==","MQ==","MQ=="],["MQ==","NQ==","MQ==","MQ==","MQ==","MQ=="],["MQ==","Ng==","MA==","MQ==","MQ==","MQ=="],["MQ==","Nw==","MQ==","MQ==","MQ==","MQ=="],["Mg==","MQ==","MA==","MQ==","MQ==","MQ=="],["Mg==","Mg==","MA==","MQ==","MQ==","MQ=="],["Mg==","Mw==","MQ==","MQ==","MQ==","MQ=="],["Mg==","NA==","MA==","MQ==","MQ==","MQ=="],["Mg==","NQ==","MA==","MQ==","MQ==","MQ=="],["Mg==","Ng==","MQ==","MQ==","MQ==","MQ=="],["Mg==","Nw==","MA==","MQ==","MQ==","MQ=="]];
var actualBoard=[];actualState=[];indexGame=1;tiAudio=false;
var wordsGame="U0VMRUNDSU9OQVJfSU1BR0VORVNfU09OSURP"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actorder=[1,2];var in_act=0;
