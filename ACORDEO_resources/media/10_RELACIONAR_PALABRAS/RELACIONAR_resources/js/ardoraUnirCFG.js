//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=200; timeIni=200; timeBon=0;
var successes=0; successesMax=17; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#FF0080"; colorText="#000000"; colorSele="#00FFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Congrutalation...!!!"; messageTime="GAME OVER....!!!"; messageError=""; messageErrorG=""; messageAttempts="GAME...OVER!!!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UkVMQUNJT05BUg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["R2FuYWRvciBkZSAxNCBDaGFtcGlvbnMu", "UmVhbCBNYWRyaWQ="],["UmVhbCBNYWRyaWQ=", "QmVuemVtYS4="],["Q29ub2NpZG8gY29tbyBDdWxlcnMu", "QmFyY2Vsb25h"],["QmFyY2Vsb25h", "TGV3YW5kb3dza2ku"],["VGllbmVuIGFsIEFuZHJvaWRlLg==", "TWFuLkNpdHk="],["TWFuLkNpdHk=", "SGFsbGFuZC4="],["QmF5ZXIgTXVuaWNo", "VGhvbWFzIE11bGxlci4="],["RXF1aXBvIEFsZW1hbi4=", "QmF5ZXIgTXVuaWNo"],["VGllbmVuIGEgdW5hIHRvcnR1Z2Eu", "UFNH"],["UFNH", "TWVzc2ku"],["Q29ub2NpZG8gY29tbyBsb3MgRGlhYmxvcyBSb2pvcy4=", "TWFuLlVuaXRlZA=="],["TWFuLlVuaXRlZA==", "QWxlamFuZHJvIEdhcm5hY2hvLg=="],["TGl2ZXJwb29s", "TW9oYW1lZCBTYWxhaC4="],["U3UgY2FtaXNldGEgZXMgUm9qYS4=", "TGl2ZXJwb29s"],["RXF1aXBvIGl0YWxpYW5vIG1hcyBnYW5hZG9yLg==", "SnV2ZW50dXM="],["SnV2ZW50dXM=", "RGkgTWFyaWEu"],["UmVhbCBNYWRyaWQ=", "QmVuemVtYS4="]];
var c=[[24,11],[11,8],[21,9],[9,12],[19,8],[8,8],[12,14],[14,12],[21,3],[3,6],[32,10],[10,19],[9,14],[20,9],[28,8],[8,9],[11,8]];
var con1=["Ganador de 14 Champions.","Conocido como Culers.","Tienen al Androide.","Equipo Aleman.","Tienen a una tortuga.","Conocido como los Diablos Rojos.","Su camiseta es Roja.","Equipo italiano mas ganador."];
var con2=["Real Madrid","Barcelona","Man.City","Bayer Munich","PSG","Man.United","Liverpool","Juventus"];
var con3=["Benzema.","Lewandowski.","Halland.","Thomas Muller.","Messi.","Alejandro Garnacho.","Mohamed Salah.","Di Maria."];
var sel1=""; join1=[]; join2=[];
