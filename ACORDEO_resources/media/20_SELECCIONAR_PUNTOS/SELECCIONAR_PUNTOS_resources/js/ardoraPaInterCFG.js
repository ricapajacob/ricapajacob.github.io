//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=2;
var successes=0; successesMax=6; attempts=0; attemptsMax=2;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
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
var fEnun="'Arial Narrow', sans-serif";
var timeOnMessage=5; messageOk="LO LOGRASTE :)"; messageTime="SE ACABO TU TIEMPO :("; messageError=""; messageErrorG=""; messageAttempts="EL LIMITE DE TIEMPO SE AGOTO :("; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U0VMRUNDSU9OQVJfUFVOVE9T"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["346","18","0","0"],["383","15","0","0"],["419","6","0","0"],["458","4","0","0"],["484","4","0","0"],["526","8","0","0"],["552","28","0","0"],["561","54","0","0"],["561","78","0","0"],["560","141","0","0"],["562","173","0","0"],["561","210","0","0"],["560","241","0","0"],["545","256","0","0"],["527","262","0","0"],["513","271","0","0"],["487","275","0","0"],["469","267","0","0"],["439","264","0","0"],["416","258","0","0"],["393","248","0","0"],["372","238","0","0"],["350","239","0","0"],["342","225","0","0"],["336","204","0","0"],["330","153","0","0"],["330","77","0","0"],["330","39","0","0"],["345","17","0","0"],["121","263","1","1"],["137","257","1","1"],["180","253","1","1"],["223","246","1","1"],["263","245","1","1"],["288","243","1","1"],["319","240","1","1"],["343","251","1","1"],["361","266","1","1"],["349","272","1","1"],["296","281","1","1"],["244","287","1","1"],["201","292","1","1"],["156","293","1","1"],["128","279","1","1"],["137","257","1","1"],["69","207","2","2"],["68","218","2","2"],["66","242","2","2"],["66","254","2","2"],["75","260","2","2"],["91","262","2","2"],["103","259","2","2"],["112","255","2","2"],["115","244","2","2"],["115","230","2","2"],["114","217","2","2"],["100","214","2","2"],["91","217","2","2"],["81","217","2","2"],["69","207","2","2"],["354","244","3","3"],["369","241","3","3"],["376","241","3","3"],["384","245","3","3"],["393","254","3","3"],["397","261","3","3"],["394","265","3","3"],["385","266","3","3"],["374","264","3","3"],["361","263","3","3"],["353","256","3","3"],["348","249","3","3"],["354","242","3","3"],["282","208","4","4"],["278","215","4","4"],["274","227","4","4"],["271","237","4","4"],["280","242","4","4"],["291","238","4","4"],["300","238","4","4"],["313","235","4","4"],["323","237","4","4"],["328","242","4","4"],["331","236","4","4"],["332","222","4","4"],["325","208","4","4"],["311","202","4","4"],["284","207","4","4"],["73","37","5","5"],["90","35","5","5"],["99","38","5","5"],["126","40","5","5"],["144","42","5","5"],["186","43","5","5"],["219","47","5","5"],["243","47","5","5"],["265","49","5","5"],["285","52","5","5"],["295","53","5","5"],["298","76","5","5"],["306","105","5","5"],["306","136","5","5"],["305","162","5","5"],["304","177","5","5"],["303","192","5","5"],["303","199","5","5"],["279","210","5","5"],["252","208","5","5"],["217","210","5","5"],["194","214","5","5"],["196","227","5","5"],["197","240","5","5"],["197","246","5","5"],["190","249","5","5"],["178","250","5","5"],["167","252","5","5"],["163","232","5","5"],["161","215","5","5"],["126","215","5","5"],["110","212","5","5"],["87","212","5","5"],["79","209","5","5"],["70","199","5","5"],["67","121","5","5"],["65","55","5","5"],["65","43","5","5"],["72","38","5","5"]];
var backSrc="SELECCIONAR_PUNTOS_resources/media/Computadora-gamer-alta-tecnologia-monitor-gabinete-teclado-mouse-gamer.jpg";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(346,18),new Point(383,15),new Point(419,6),new Point(458,4),new Point(484,4),new Point(526,8),new Point(552,28),new Point(561,54),new Point(561,78),new Point(560,141),new Point(562,173),new Point(561,210),new Point(560,241),new Point(545,256),new Point(527,262),new Point(513,271),new Point(487,275),new Point(469,267),new Point(439,264),new Point(416,258),new Point(393,248),new Point(372,238),new Point(350,239),new Point(342,225),new Point(336,204),new Point(330,153),new Point(330,77),new Point(330,39),new Point(345,17)],[new Point(121,263),new Point(137,257),new Point(180,253),new Point(223,246),new Point(263,245),new Point(288,243),new Point(319,240),new Point(343,251),new Point(361,266),new Point(349,272),new Point(296,281),new Point(244,287),new Point(201,292),new Point(156,293),new Point(128,279),new Point(137,257)],[new Point(69,207),new Point(68,218),new Point(66,242),new Point(66,254),new Point(75,260),new Point(91,262),new Point(103,259),new Point(112,255),new Point(115,244),new Point(115,230),new Point(114,217),new Point(100,214),new Point(91,217),new Point(81,217),new Point(69,207)],[new Point(354,244),new Point(369,241),new Point(376,241),new Point(384,245),new Point(393,254),new Point(397,261),new Point(394,265),new Point(385,266),new Point(374,264),new Point(361,263),new Point(353,256),new Point(348,249),new Point(354,242)],[new Point(282,208),new Point(278,215),new Point(274,227),new Point(271,237),new Point(280,242),new Point(291,238),new Point(300,238),new Point(313,235),new Point(323,237),new Point(328,242),new Point(331,236),new Point(332,222),new Point(325,208),new Point(311,202),new Point(284,207)],[new Point(73,37),new Point(90,35),new Point(99,38),new Point(126,40),new Point(144,42),new Point(186,43),new Point(219,47),new Point(243,47),new Point(265,49),new Point(285,52),new Point(295,53),new Point(298,76),new Point(306,105),new Point(306,136),new Point(305,162),new Point(304,177),new Point(303,192),new Point(303,199),new Point(279,210),new Point(252,208),new Point(217,210),new Point(194,214),new Point(196,227),new Point(197,240),new Point(197,246),new Point(190,249),new Point(178,250),new Point(167,252),new Point(163,232),new Point(161,215),new Point(126,215),new Point(110,212),new Point(87,212),new Point(79,209),new Point(70,199),new Point(67,121),new Point(65,55),new Point(65,43),new Point(72,38)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4","5"];
var areaSolved=["N","N","N","N","N","N"];
var areaWord=["GAMER CPU","GAMER TECLADO","PARLANTE","GAMER MOUSE","GAMER AUDIFONO","GAMER MONITOR"];
var areaHelp=["Es un  gabinete","Sirve para escribir","Reproduce sonidos","Te ayuda a hacer click","Sirve para escuchar","No es televisor"];
var areaWrong=["upps error intente de nuevo","upps error vuelve a intentarlo","upps vuelve a intentarlo","upps error vuelve a intentarlo","upps error vuelve a intentarlo","upps error vuelve a intentarlo"];
var initMessageError="";
var wordPointX=["346","121","69","354","282","73"];
var wordPointY=["18","263","207","244","208","37"];
var areaColor=["#F0F0F0","#0000FF","#FF0080","#FFFF80","#400000","#00FF00"];
var pathMedia="SELECCIONAR_PUNTOS_resources/media/"
var auMP3=["","","","","",""];
var auOGG=["","","","","",""];
var colorWord="#000000";
