//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=2;
var successes=0; successesMax=6; attempts=0; attemptsMax=6;
var score=0; scoreMax=12; scoreInc=2; scoreDec=1
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
var timeOnMessage=5; messageOk="YES YES YES....!!!!!!!"; messageTime="GAME OVER..."; messageError=""; messageErrorG=""; messageAttempts="GAME OVER"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["Q0hBUk1BTkRFUg==","S1lPR1JF","RUxFQ1RSSUNP","QVJDRVVT","UFJPRkVTT1IgUk9XQU4=","VEVBTSBTS1VMTA=="];var cp_ima=["5f92c2f60dd9c8f98fb5e3fb06642775.jpg","Pokemon-Go-Primal-Kyogre-weaknesses-counters.jpg","580b57fcd9996e24bc43c325.png","Pokemon-legendarios-historia_1280882010_255862_1024x576.png","descarga.jpeg","nancy-olivo-teamskull-finalprint-thicklines-2.jpg"];var cp_mp3=["correcaminos-bip-bip-.mp3","correcaminos-bip-bip-.mp3","correcaminos-bip-bip-.mp3","correcaminos-bip-bip-.mp3","correcaminos-bip-bip-.mp3","correcaminos-bip-bip-.mp3"];var cp_ogg=["","","","","",""];var cp_que=["wr9DdcOhbCBlcyBlbCBQb2vDqW1vbiBpbmljaWFsIGRlIHRpcG8gZnVlZ28gZW4gbGEgcmVnacOzbiBkZSBLYW50bz8=","wr9DdcOhbCBlcyBlbCBub21icmUgZGVsIFBva8OpbW9uIGxlZ2VuZGFyaW8gZGUgdGlwbyBhZ3VhIGVuIGxhIHJlZ2nDs24gZGUgSG9lbm4/","wr9DdcOhbCBlcyBlbCB0aXBvIGRlIFBpa2FjaHUsIGVsIFBva8OpbW9uIG1hc2NvdGEgZGUgbGEgZnJhbnF1aWNpYSBQb2vDqW1vbj8=","wr9DdcOhbCBlcyBlbCBQb2vDqW1vbiBtw6FzIGZ1ZXJ0ZSBlbiB0w6lybWlub3MgZGUgZXN0YWTDrXN0aWNhcyBiYXNlPw==","wr9DdcOhbCBlcyBlbCBub21icmUgZGVsIHByb2Zlc29yIFBva8OpbW9uIGVuIGxhIHJlZ2nDs24gZGUgU2lubm9oPw==","wr9DdcOhbCBlcyBlbCBub21icmUgZGVsIGVxdWlwbyBtYWx2YWRvIGVuIGxhIHJlZ2nDs24gZGUgQWxvbGE/"];var cp_num=[10,6,9,6,14,10];var cp_alt=["","","","","",""];
var wordsGame="Q29uc3RydXllX1BhbGFicmFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
