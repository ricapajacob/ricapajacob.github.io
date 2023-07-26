//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=1;
var successes=0; successesMax=9; attempts=0; attemptsMax=5;
var score=0; scoreMax=18; scoreInc=2; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="gooo";
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
var timeOnMessage=5; messageOk="yes yes"; messageTime="SE CABO EL TIEMPO:("; messageError=":( ERROR"; messageAttempts="SE ACABO EL LIMITE DE INTENTOS:("; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img tabindex="0" alt="" class="imaup imaLeft" src="Completar_texto_resources/media/b8f0ee3ca514d8b617e06f28f9765170_L.jpg" alt="Ima"  align="left"><img alt="play" id="playSound" class="imaRight" src="Completar_texto_resources/media/sound.png" alt="Sound"  align="right"><p>\"<input aria-label="Item 1" type="text" name="item1" id="item1" class="ardoraDropInput" readonly>, <input aria-label="Item 2" type="text" name="item2" id="item2" class="ardoraDropInput" readonly>, <input aria-label="Item 3" type="text" name="item3" id="item3" class="ardoraDropInput" readonly> y <input aria-label="Item 4" type="text" name="item4" id="item4" class="ardoraDropInput" readonly> orbitan cerca del <input aria-label="Item 5" type="text" name="item5" id="item5" class="ardoraDropInput" readonly>, mientras que <input aria-label="Item 6" type="text" name="item6" id="item6" class="ardoraDropInput" readonly>, <input aria-label="Item 7" type="text" name="item7" id="item7" class="ardoraDropInput" readonly>, <input aria-label="Item 8" type="text" name="item8" id="item8" class="ardoraDropInput" readonly> y <input aria-label="Item 9" type="text" name="item9" id="item9" class="ardoraDropInput" readonly> se extienden más allá, formando el impresionante sistema solar.\" </p><p> </p>'];
var answers=["Marte","Sol","Júpiter","Venus","Saturno","Urano","Neptuno","Tierra","Mercurio"];
var a=["NA==","NQ==","Ng==","Mg==","Nw==","OA==","OQ==","Mw==","MQ=="];
var itemCorr=["0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGFyX3RleHRv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var textBNext="SIGUIENTE";
var fHelp="Verdana, Geneva, sans-serif";
