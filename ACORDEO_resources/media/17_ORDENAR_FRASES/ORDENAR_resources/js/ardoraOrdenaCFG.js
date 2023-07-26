var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=4;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="yes yes yes yes  yes yes yes yes"; messageTime="game over..."; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="game over"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T1JERU5BUg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Tm8gaW1wb3J0YSBjdcOhbnRhcyB2ZWNlcyBjYWlnYXMsIGxvIGltcG9ydGFudGUgZXMgY3XDoW50YXMgdmVjZXMgdGUgbGV2YW50ZXMu","U2llbXByZSBoYXkgdW5hIHNvbHVjacOzbi4gTG8gw7puaWNvIHF1ZSBzZSBuZWNlc2l0YSBlcyBlbmNvbnRyYXJsYS4=","TGEgdmVyZGFkZXJhIHBlbGVhIGNvbWllbnphIGN1YW5kbyB1bm8gZXN0w6EgY2Fuc2FkbyBkZSBsdWNoYXIsIHBlcm8gc2lndWUgYWRlbGFudGUu","TGFzIGhlcmlkYXMgcHVlZGVuIHNhbmFyLCBwZXJvIGxvcyByZWN1ZXJkb3Mgc2llbXByZSBlc3RhcsOhbiBhaMOtLg==","TnVuY2EgdGUgcmluZGFzLCBpbmNsdXNvIGN1YW5kbyBlbmZyZW50ZXMgZGlmaWN1bHRhZGVzLiDCoUNvbmbDrWEgZW4gdGkgbWlzbW8geSBzaWd1ZSBhZGVsYW50ZS4="];imaW=["goku.jpg","BUU.jpg","VEGETA.jpg","N_18.jpg","PICORO.jpg"];queW=["GOKU","BUU","Vegeta","Nº 18","PICORO"];altW=["","","","",""];c=[76,66,83,65,93];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="355";indexG=0;profG=0;dirMedia="ORDENAR_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
