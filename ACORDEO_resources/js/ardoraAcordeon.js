//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var isPlayEnu=false;
$(document).ready(function () {$("body").css({backgroundColor:"#FFFFFF"});var tabs = $("#ACORDEOardoraTabs").tabs({heightStyle: "fill"});$("body").on("resize", function () {tabs.tabs("refresh");});
tabs.find( ".ui-tabs-nav" ).sortable({axis:"x",stop: function() {tabs.tabs("refresh");}});
 $( "#ACORDEOardoraTabs" ).tabs({collapsible: true});
$("#ACORDEOardoraEnu").click(function(){ document.getElementById("audioEnu").play();isPlayEnu=true;});
});
function initAct(){
if (tiAval){parent.iniciaActividade()}
}
function randomSort(){
}
function isCorrect(){
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
