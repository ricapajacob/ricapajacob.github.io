//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var posIni=90;var incre=360/arcIni.length;
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$(".bColor").mousedown(function() {indexColor=parseInt($(this).attr("id").substring(1,3));seleColor();});seleColor();
drawArcs();
paintPie();
$("#buttonOk").attr("tabindex","0");$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
}
var Arc = function () {this.x=0;this.y=0;this.ini=0;this.end=0;};
function seleColor() {
}
function windowToCanvas(e) {var x = e.x || e.clientX,y = e.y || e.clientY,bbox = canvas.getBoundingClientRect();return { x: x - bbox.left * (canvas.width  / bbox.width),y: y - bbox.top  * (canvas.height / bbox.height)};};
function drawArcs() {canvas.width = canvas.width; for (var i = 0; i < this.arcCenterX.length; ++i) {drawA(i);}
}
function drawA(i) {context.beginPath();context.fillStyle = arcFillStyles[i];context.strokeStyle = this.arcs[i].stroke;context.moveTo(this.arcs[i].x, this.arcs[i].y);
context.arc(this.arcs[i].x, this.arcs[i].y, radius, this.arcs[i].ini, this.arcs[i].end);context.lineTo(this.arcs[i].x, this.arcs[i].y);context.fill();context.stroke();context.closePath();
}
canvas.onmousemove = function(e) {canvas.width=canvas.width;var indexInside=-1;var location=windowToCanvas(e);arcs.forEach(function(arc) {
var i = arcs.indexOf(arc);if (isInsideSector(location, this.arcs[i].x, this.arcs[i].y, radius, this.arcs[i].ini, this.arcs[i].end)) {arcs[i].stroke = colorSele;
indexInside=i;} else {arcs[i].stroke = colorText;}});drawArcs();
if (indexInside>-1){$("#ardoraCanvasPie").css("cursor","pointer");drawA(indexInside);}else{$("#ardoraCanvasPie").css("cursor","default");}}
canvas.onmouseup=function (e) {}
function isInsideSector(point, centerX,centerY, radius, angle1, angle2) {function areClockwise(centerX,centerY, radius, angle, point2) {
var point1 = {x:(centerX+radius)*Math.cos(angle),y:(centerY+radius)*Math.sin(angle)};
return -point1.x*point2.y + point1.y*point2.x > 0;}var relPoint={x:point.x-centerX,y:point.y-centerY};
return !areClockwise(centerX,centerY,radius,angle1,relPoint) && areClockwise(centerX,centerY,radius,angle2,relPoint) && (relPoint.x*relPoint.x + relPoint.y*relPoint.y <= radius * radius);}
for (var i=0; i < arcCenterX.length; ++i) {var arcNew = new Arc();arcNew.x=arcCenterX[i];arcNew.y=arcCenterY[i];arcNew.ini=arcIni[i];arcNew.end=arcEnd[i];arcNew.stroke=arcStrokeStyles[i];arcNew.fill=arcFillStyles[i];arcs.push(arcNew);}
function randomSort(){
}
function isCorrect(){
}
function paintPie(){var indexArc=0;var indexCol=0;while (indexArc<arcCenterX.length) {var cV=parseFloat(piesWords(a[indexCol]));while (cV>0){arcFillStyles[indexArc]=colors[indexCol];cV=cV-uniVal;indexArc++;} indexCol++;} drawArcs();}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function piesWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
