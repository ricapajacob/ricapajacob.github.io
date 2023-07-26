//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
 canvas=document.getElementById("ardoraActCanvas");context=canvas.getContext("2d");
canvas.width=rad+25;
canvas.height=rad+25+rad/8;
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();document.getElementById("ardoraActCanvas").style.zIndex=50;}; showTime();
$("#ardoraAct").css("width",rad+25);
$("#ardoraDig").css("left",5);$("#ardoraDigBack").css("left",5);
var radius=rad/2;var isInDig=false;canvasDB=document.getElementById("ardoraDigBack");contextDB=canvasDB.getContext("2d");canvasD=document.getElementById("ardoraDig");contextD=canvasD.getContext("2d");canvasDB.width=rad+25;canvasDB.height=rad+25+radius/4;canvasD.width=canvasDB.width;canvasD.height=canvasDB.height;drawDigital();drawButtLeftDi(false);drawButtRightDi(false);drawEyesDi(false);
$("#ardoraDig").hover(function(e) {isInDig=true;drawEyesDi(isInDig);}, function() {isInDig=false;drawEyesDi(isInDig);});
$("#ardoraDig").mousemove(function(e){var centerX=canvasDB.width/2;var centerY=canvasDB.width/2;var radius=rad/2;var a=radius/2;var b=0.866*radius;
if (isInDig){var offset=$(this).offset();var pX=e.pageX-offset.left;var pY=e.pageY-offset.top;
if (pX>centerX && pY<canvasDB.height/3){roundedRect(contextDB,centerX-rad/4+10,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX-rad/4+10+5+3,centerY+b+radius/5-radius/4-80-70-30+10+5-3,10,10,5,colorText);roundedRect(contextDB,centerX+rad/4-30,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX+rad/4-30+5+3,centerY+b+radius/5-radius/4-80-70-30+10+5-3,10,10,5,colorText);}
if (pX>centerX && pY>canvasDB.height/3 && pY<2*canvasDB.height/3){roundedRect(contextDB,centerX-rad/4+10,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX-rad/4+10+5+3,centerY+b+radius/5-radius/4-80-70-30+10+5,10,10,5,colorText);roundedRect(contextDB,centerX+rad/4-30,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX+rad/4-30+5+3,centerY+b+radius/5-radius/4-80-70-30+10+5,10,10,5,colorText);}
if (pX>centerX && pY>2*canvasDB.height/3){roundedRect(contextDB,centerX-rad/4+10,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX-rad/4+10+5+3,centerY+b+radius/5-radius/4-80-70-30+10+5+3,10,10,5,colorText);roundedRect(contextDB,centerX+rad/4-30,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX+rad/4-30+5+3,centerY+b+radius/5-radius/4-80-70-30+10+5+3,10,10,5,colorText);}
if (pX<centerX && pY<canvasDB.height/3){roundedRect(contextDB,centerX-rad/4+10,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX-rad/4+10+5-3,centerY+b+radius/5-radius/4-80-70-30+10+5-3,10,10,5,colorText);roundedRect(contextDB,centerX+rad/4-30,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX+rad/4-30+5-3,centerY+b+radius/5-radius/4-80-70-30+10+5-3,10,10,5,colorText);}
if (pX<centerX && pY>canvasDB.height/3 && pY<2*canvasDB.height/3){roundedRect(contextDB,centerX-rad/4+10,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX-rad/4+10+5-3,centerY+b+radius/5-radius/4-80-70-30+10+5,10,10,5,colorText);roundedRect(contextDB,centerX+rad/4-30,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX+rad/4-30+5-3,centerY+b+radius/5-radius/4-80-70-30+10+5,10,10,5,colorText);}
if (pX<centerX && pY>2*canvasDB.height/3){roundedRect(contextDB,centerX-rad/4+10,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX-rad/4+10+5-3,centerY+b+radius/5-radius/4-80-70-30+10+5+3,10,10,5,colorText);roundedRect(contextDB,centerX+rad/4-30,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX+rad/4-30+5-3,centerY+b+radius/5-radius/4-80-70-30+10+5+3,10,10,5,colorText);}
if (Math.abs(pX-(centerX+a+radius/4))<radius/4 && Math.abs(pY-(centerY+b+radius/5))<radius/8){drawButtRightDi(true);}else{
if (Math.abs(pX-(centerX-a-radius/4))<radius/4 && Math.abs(pY-(centerY+b+radius/5))<radius/8){drawButtLeftDi(true);}else{$("#ardoraDig").css("cursor","default");drawButtLeftDi(false);drawButtRightDi(false);}}}});
$("#ardoraDig").click(function(e) {var centerX=canvasDB.width/2;var centerY=canvasDB.width/2;var radius=rad/2;var a=radius/2;var b=0.866*radius;var offset=$(this).offset();var pX=e.pageX-offset.left;var pY=e.pageY-offset.top;
if (Math.abs(pX-(centerX+a+radius/4))<radius/4 && Math.abs(pY-(centerY+b+radius/5))<radius/8){posMD=posMD+5;if (posMD>55){posMD=0;posHD++;}if (posHD>23){posHD=0;}drawDigital();}
if (Math.abs(pX-(centerX-a-radius/4))<radius/4 && Math.abs(pY-(centerY+b+radius/5))<radius/8){posMD=posMD-5;if (posMD<0){posMD=55;posHD--;}if (posHD<0){posHD=23;}drawDigital();}});
$("#buttonOk").attr("tabindex","0");$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
$("#ardoraDig").attr("tabindex","0");$("#ardoraDig").keydown(function(e){if (e.which==38){posMD = posMD + 5;if (posMD > 55) {posMD = 0;posHD++;};if (posHD > 23) {posHD = 0;};drawDigital();};if (e.which==40){posMD = posMD - 5;if (posMD < 0) {posMD = 55;posHD--;};if (posHD < 0) {posHD = 23;};drawDigital();}});
}
function drawEllipseByCenter(ctx, cx, cy, w, h) {drawEllipse(ctx,cx-w/2.0,cy-h/2.0,w,h);}
function drawEllipse(ctx, x, y, w, h) {var kappa=.5522848,ox=(w/2)*kappa,oy=(h/2)*kappa,xe=x+w,ye=y+h,xm=x+w/2,ym=y+h/2;
ctx.beginPath();ctx.moveTo(x,ym);ctx.bezierCurveTo(x,ym-oy,xm-ox,y,xm,y);ctx.bezierCurveTo(xm+ox,y,xe,ym-oy,xe,ym);ctx.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye);ctx.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym);ctx.stroke();}
function drawDigital(){var centerX=canvasDB.width/2;var centerY=canvasDB.width/2;var radius=rad/2;var a=radius/2;var b=0.866*radius;
contextDB.beginPath();contextDB.fillStyle=colorBack;contextDB.fillRect(centerX-rad/2+10+2,centerY+b+radius/5-radius/4-10-60-10+2,rad-20-4,60-4);contextDB.fill();contextDB.fillStyle=colorText;
contextDB.font="bold 38pt Verdana";
if (posHD<10){var pHour="0"+posHD.toString();}else{var pHour=posHD.toString();
if (posHD>11) {var pHour=(posHD-12).toString();}
} if (posMD<10){var pMin="0"+posMD.toString();}else{var pMin=posMD.toString();}
var posText=contextDB.measureText(pHour+":"+pMin).width/2;contextDB.fillText(pHour+":"+pMin,centerX-posText,centerY+b+radius/5-radius/4-30);
contextDB.font="10pt Verdana";if (posHD>11) {var posText=contextDB.measureText("PM").width;contextDB.fillText("PM",rad-posText,centerY+b+radius/5-radius/4-30);
}else{
var posText=contextDB.measureText("AM").width;contextDB.fillText("AM",rad-posText,centerY+b+radius/5-radius/4-30);}
}
function drawButtLeftDi(isHover){var centerX=canvasDB.width/2; var centerY=canvasDB.width/2;var radius = rad / 2;var a=radius/2;var b=0.866*radius;
if (isHover){$("#ardoraDig").css("cursor","pointer");contextDB.beginPath();contextDB.fillStyle=colorBack;contextDB.strokeStyle=colorBack;contextDB.lineWidth=12;drawEllipseByCenter(contextDB,centerX-a-radius/4,centerY+b+radius/5,radius/2,radius/4);contextDB.fill();contextDB.stroke();
contextDB.beginPath();contextDB.strokeStyle=colorSele;contextDB.lineWidth=10;drawEllipseByCenter(contextDB,centerX-a-radius/4,centerY+b+radius/5,radius/2,radius/4);contextDB.stroke();contextDB.lineWidth=1;contextDB.strokeStyle=colorText;
contextDB.beginPath();drawEllipseByCenter(contextDB,centerX-a-radius/4,centerY+b+radius/5,radius/2+10,radius/4+10);contextDB.stroke();
contextDB.beginPath();drawEllipseByCenter(contextDB,centerX-a-radius/4,centerY+b+radius/5,radius/2-10,radius/4-10);contextDB.stroke();
contextDB.beginPath();contextDB.fillStyle=colorButton;contextDB.font="bold 12pt Verdana";contextDB.fillText(String.fromCharCode("8681",16).substr(0,1),centerX-a-radius/4-5,centerY+b+radius/5+4);
}else{
$("#ardoraDig").css("cursor","default");contextDB.beginPath();contextDB.fillStyle=colorBack;contextDB.strokeStyle=colorBack;contextDB.lineWidth=12;drawEllipseByCenter(contextDB,centerX-a-radius/4,centerY+b+radius/5,radius/2,radius/4);contextDB.fill();contextDB.stroke();
contextDB.beginPath();contextDB.strokeStyle=colorButton;contextDB.lineWidth=10;drawEllipseByCenter(contextDB,centerX-a-radius/4,centerY+b+radius/5,radius/2,radius/4);contextDB.stroke();
contextDB.lineWidth=1;contextDB.strokeStyle=colorText;contextDB.beginPath();drawEllipseByCenter(contextDB,centerX-a-radius/4,centerY+b+radius/5,radius/2+10,radius/4+10);contextDB.stroke();
contextDB.beginPath();drawEllipseByCenter(contextDB,centerX-a-radius/4,centerY+b+radius/5,radius/2-10,radius/4-10);contextDB.stroke();
contextDB.beginPath();contextDB.fillStyle=colorText;contextDB.font="bold 12pt Verdana";contextDB.fillText(String.fromCharCode("8681",16).substr(0,1),centerX-a-radius/4-5,centerY+b+radius/5+4);
}}
function drawButtRightDi(isHover){var centerX=canvasDB.width/2; var centerY=canvasDB.width/2;var radius=rad/2;var a=radius/2;var b=0.866*radius;
if (isHover){$("#ardoraDig").css("cursor","pointer");contextDB.beginPath();contextDB.fillStyle=colorBack;contextDB.strokeStyle=colorBack;contextDB.lineWidth=12;drawEllipseByCenter(contextDB,centerX+a+radius/4,centerY+b+radius/5,radius/2,radius/4);contextDB.fill();contextDB.stroke();
contextDB.beginPath();contextDB.strokeStyle=colorSele;contextDB.lineWidth=10;drawEllipseByCenter(contextDB,centerX+a+radius/4,centerY+b+radius/5,radius/2,radius/4);contextDB.stroke();contextDB.lineWidth=1;contextDB.strokeStyle=colorText;
contextDB.beginPath();drawEllipseByCenter(contextDB,centerX+a+radius/4,centerY+b+radius/5,radius/2+10,radius/4+10);contextDB.stroke();
contextDB.beginPath();drawEllipseByCenter(contextDB,centerX+a+radius/4,centerY+b+radius/5,radius/2-10,radius/4-10);contextDB.stroke();
contextDB.beginPath();contextDB.fillStyle=colorButton;contextDB.font="bold 12pt Verdana";contextDB.fillText(String.fromCharCode("8679",16).substr(0,1),centerX+a+radius/4-5,centerY+b+radius/5+4);
}else{
$("#ardoraDig").css("cursor","default");contextDB.beginPath();contextDB.fillStyle=colorBack;contextDB.strokeStyle=colorBack;contextDB.lineWidth=12;drawEllipseByCenter(contextDB,centerX+a+radius/4,centerY+b+radius/5,radius/2,radius/4);contextDB.fill();contextDB.stroke();
contextDB.beginPath();contextDB.strokeStyle=colorButton;contextDB.lineWidth=10;drawEllipseByCenter(contextDB,centerX+a+radius/4,centerY+b+radius/5,radius/2,radius/4);contextDB.stroke();contextDB.lineWidth=1;contextDB.strokeStyle=colorText;
contextDB.beginPath();drawEllipseByCenter(contextDB,centerX+a+radius/4,centerY+b+radius/5,radius/2+10,radius/4+10);contextDB.stroke();
contextDB.beginPath();drawEllipseByCenter(contextDB,centerX+a+radius/4,centerY+b+radius/5,radius/2-10,radius/4-10);contextDB.stroke();
contextDB.beginPath();contextDB.fillStyle=colorText;contextDB.font="bold 12pt Verdana";contextDB.fillText(String.fromCharCode("8679",16).substr(0,1),centerX+a+radius/4-5,centerY+b+radius/5+4);
}}
function drawEyesDi(isHover){var centerX=canvasDB.width/2;var centerY=canvasDB.width/2;var radius=rad/2;var a=radius/2;var b=0.866*radius;
if (isHover){contextDB.beginPath();contextDB.fillStyle=colorBack;contextDB.fillRect(0,centerY+b+radius/5-radius/4-80-75,rad,50);contextDB.fill();
contextDB.beginPath();contextDB.moveTo(centerX,centerY+b+radius/5-radius/4-40-70-40);contextDB.lineWidth=50;contextDB.lineTo(centerX,centerY+b+radius/5-radius/4-80);contextDB.stroke();contextDB.lineWidth=2;
roundedRect(contextDB,centerX-rad/4,centerY+b+radius/5-radius/4-80-70-30,rad/2,40,5,colorSele);roundedRect(contextDB,centerX-rad/4+10,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX-rad/4+10+5,centerY+b+radius/5-radius/4-80-70-30+10+5,10,10,5,colorText);
roundedRect(contextDB,centerX+rad/4-30,centerY+b+radius/5-radius/4-80-70-30+10,20,20,5,colorBack);roundedRect(contextDB,centerX+rad/4-30+5,centerY+b+radius/5-radius/4-80-70-30+10+5,10,10,5,colorText);
contextDB.lineWidth=20;contextDB.beginPath();contextDB.moveTo(centerX,centerY+b+radius/5-radius/4-90);contextDB.quadraticCurveTo(centerX+rad/4,centerY+b+radius/5-radius/4-90+50,centerX+a+radius/4,centerY+b+radius/5);contextDB.stroke();
contextDB.beginPath();contextDB.moveTo(centerX,centerY+b+radius/5-radius/4-90);contextDB.quadraticCurveTo(centerX-rad/4,centerY+b+radius/5-radius/4-90+50,centerX-a-radius/4,centerY+b+radius/5);contextDB.stroke();
contextDB.lineWidth=2;roundedRect(contextDB,centerX-rad/2,centerY+b+radius/5-radius/4-90,rad,80,5,colorSele);roundedRect(contextDB,centerX-rad/2+10,centerY+b+radius/5-radius/4-10-60-10,rad-20,60,5,colorBack);drawDigital();
} else {
contextDB.beginPath();contextDB.fillStyle=colorBack;contextDB.fillRect(0,centerY+b+radius/5-radius/4-80-70-35,rad,50);contextDB.fill();
contextDB.beginPath();contextDB.moveTo(centerX,centerY+b+radius/5-radius/4-50);contextDB.lineWidth=50;contextDB.lineTo(centerX,centerY+b+radius/5-radius/4-120);contextDB.stroke();contextDB.lineWidth=2;
roundedRect(contextDB,centerX-rad/4,centerY+b+radius/5-radius/4-80-70,rad/2,40,5,colorSele);
contextDB.beginPath();contextDB.moveTo(centerX-rad/4+10,centerY+b+radius/5-radius/4-80-70+20-5);contextDB.lineWidth=1;contextDB.lineTo(centerX-rad/4+10+20,centerY+b+radius/5-radius/4-80-70+20-5);
contextDB.moveTo(centerX+rad/4-30,centerY+b+radius/5-radius/4-80-70+20-5);contextDB.lineWidth=1;contextDB.lineTo(centerX+rad/4-30+20,centerY+b+radius/5-radius/4-80-70+20-5);contextDB.stroke();
roundedRect(contextDB,centerX-rad/4+10,centerY+b+radius/5-radius/4-80-70+20,20,10,5,colorText);roundedRect(contextDB,centerX+rad/4-30,centerY+b+radius/5-radius/4-80-70+20,20,10,5,colorText);
contextDB.lineWidth=20;contextDB.beginPath();contextDB.moveTo(centerX,centerY+b+radius/5-radius/4-90);contextDB.quadraticCurveTo(centerX+rad/4,centerY+b+radius/5-radius/4-90+50,centerX+a+radius/4,centerY+b+radius/5);contextDB.stroke();
contextDB.beginPath();contextDB.moveTo(centerX,centerY+b+radius/5-radius/4-90);contextDB.quadraticCurveTo(centerX-rad/4,centerY+b+radius/5-radius/4-90+50,centerX-a-radius/4,centerY+b+radius/5);contextDB.stroke();contextDB.lineWidth=2;
roundedRect(contextDB,centerX-rad/2,centerY+b+radius/5-radius/4-90,rad,80,5,colorSele);roundedRect(contextDB,centerX-rad/2+10,centerY+b+radius/5-radius/4-10-60-10,rad-20,60,5,colorBack);
drawButtLeftDi(false);drawButtRightDi(false);drawDigital();}
}
function showTime() {$("#textClock").text(a[d[indexE]]);}
function randomSort(){
var rand=0;for (i=0;i<a.length;i++) {rand = Math.floor(Math.random() * (a.length-1));if (d[rand]==-1){d[rand]=i;}
else{var j=rand;while (d[j]!=-1){j++;if (j>a.length-1){j=0;}} d[j]=i;}}
}
function isCorrect(){
var correct=true;
var d12=b[d[indexE]];
if (b[d[indexE]]==12){var d12=0;}
if (posHD!=d12){correct=false;}if (posMD!=c[d[indexE]]){correct=false;}
if (correct) {score=score+scoreInc;timeAct=timeAct+timeBon;successes++;indexE++;if (indexE<a.length){showMessage("Next"); showTime();} else{$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();}
} else {attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function ReloxoWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
