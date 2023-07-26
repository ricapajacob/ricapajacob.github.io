//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=30; timeIni=30; timeBon=20;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=3; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="GOOOOO!!";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#C0C0C0"; colorButton="#004080"; colorText="#FF0000"; colorSele="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Georgia, Serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=6; messageOk="CONGRATULATIONS..!!!!!!!!!"; messageTime="GAME OVER..!!"; messageError="GAME OVER...!!"; messageAttempts="GAME OVER...!!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="https://www.youtube.com/watch?v=FYJOyrwvFk0";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_parent"; goURLError="_blank"; 
borderOk="#FFFF00"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var imaSel=0; texSel=0;
var board=[["ALBUM_FUTBOOLISTAS_resources/media/1.jpg","ALBUM_FUTBOOLISTAS_resources/media/2.jpg","ALBUM_FUTBOOLISTAS_resources/media/3.jpg","0"],["ALBUM_FUTBOOLISTAS_resources/media/4.jpg","ALBUM_FUTBOOLISTAS_resources/media/5.jpg","ALBUM_FUTBOOLISTAS_resources/media/6.jpg","0"],["0","0","0","0"],["0","0","0","0"]]; var balt=[["","","","0"],["","","","0"],["0","0","0","0"],["0","0","0","0"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[]; answers=[["Lewandowski","Cristiano Ronaldo","Leo Messi","0"],["Neymar","Halaand","Mbappe","0"],["0","0","0","0"],["0","0","0","0"]]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var alt1=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt2=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt3=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt4=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt5=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var wordsGame="QUxCVU1fRlVUQk9PTElTVEFT"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
