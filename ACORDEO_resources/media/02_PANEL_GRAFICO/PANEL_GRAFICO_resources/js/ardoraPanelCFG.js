//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=200; timeIni=200; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="goooooo!!!";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FF8040"; colorButton="#FFFFFF"; colorText="#FF0080"; colorSele="#FF8040";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="CONGRATULATIONS.....!!"; messageTime="GAME OVER!!!"; messageError="GAME OVER!!!"; messageAttempts="GAME OVER!!!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0"];
var posX=[34,181,93,177,250,319,359,388,449,449]; var posY=[12,272,57,108,199,51,99,270,226,17];
var coorx=["MzQ=", "MjQ4", "MTQ5", "MTk2", "Mjk0", "MzQ3", "NDEx", "NDc3", "NTE4", "NTY0"]; var coory=["MTQz", "MTYy", "MTU4", "MTU1", "MTU2", "MTU3", "MTU3", "MTY0", "MTU3", "MTYx"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", ""]; answers=["SOL", "TIERRA", "MERCURIO", "VENUS", "MARTE", "JUPITER", "SATURNO", "URANO", "NEPTUNO", "PLUTON"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UEFORUxfR1JBRklDTw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
