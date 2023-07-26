//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=2;
var score=0; scoreMax=6; scoreInc=3; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="GOOOO";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FF8040"; colorButton="#FFFFFF"; colorText="#000000"; colorSele="#C0C0C0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="LLEGASTE A TU LIMITE DE TIEMPO"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="LLEGASTE A TU LIMITE DE INTENTO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T1JERU5BUl9QX19SUkFGT1M="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="ORDENAR_P__RRAFOS_resources/media/";
var indexG=0;
var words1G=["QXVzdGluIFNhbnRvcyBuYWNpw7MgZW4gSGFybGVtIGRlbCBFc3RlLCBOdWV2YSBZb3JrOyBlbCAyMyBkZSBkaWNpZW1icmUgZGUgMTk4NSwgaGlqbyBkZSBwYWRyZXMgZG9taW5pY2Fub3MuIFNlIGNyaW8gZW4gZWwgYmFycmlvIFZpbGxhIFBhbG1lcmFzIGVuIFNhbnR1cmNlIGRlIFNhbiBKdWFuLCBQdWVydG8gUmljby4=","U3UgbWFkcmUsIENhcm1lbiBSb3NhcywgZnVlIGludGVncmFudGUgZGVsIGdydXBvIG11c2ljYWwgZmVtZW5pbm8gZGUgbWVyZW5ndWUgZG9taW5pY2FubyBsbGFtYWRvIExhcyBDaGljYXMgZGVsIENhbiwgcXVlIGZ1ZXJvbiBtdXkgcG9wdWxhcmVzIGR1cmFudGUgbGEgZMOpY2FkYSBkZSAxOTgwLg==","Q3JlY2nDsyBlc2N1Y2hhbmRvIGRpc3RpbnRvcyB0aXBvcyBkZSBtw7pzaWNhIHkgaGEgc2lkbyB1biBmYW4gZGUgbGEgbcO6c2ljYSByb2NrLCBlbiBwYXJ0aWN1bGFyIGRlIFJvYmkgRHJhY28gUm9zYSwgdW4gYXJ0aXN0YSBwdWVydG9ycmlxdWXDsW8gZGUgcm9jayB5IGV4aW50ZWdyYW50ZSBkZSBNZW51ZG8uIE5vIHNpZW1wcmUgZnVlIHVuIGZhbsOhdGljbyBkZWwgcmVndWV0w7NuOw==","YWZpcm1hIHF1ZSBubyBlcmEgc3UgdGlwbyBkZSBtw7pzaWNhIHByZWZlcmlkYS4gRHVyYW50ZSBsYSBkw6ljYWRhIGRlbCAyMDAwLCBzZSBpbnRlcmVzw7MgcG9yIGVzZSBnw6luZXJvIG11c2ljYWwsIGVzY3VjaGFuZG8gYSBhcnRpc3RhcyBjb21vIFRlZ28gQ2FsZGVyw7NuIHkgVGVtcG8sIGxvIHF1ZSBsbyBpbnNwaXLDsyBhIHNlZ3VpciB1bmEgY2FycmVyYSBkZSBjYW50YW50ZS4="];
var words2G=["QmVuaXRvIEFudG9uaW8gTWFydMOtbmV6IE9jYXNpbyAoQWxtaXJhbnRlIFN1ciwgVmVnYSBCYWphLCBFc3RhZG9zIFVuaWRvczsgMTAgZGUgbWFyem8gZGUgMTk5NCksMeKAiyBjb25vY2lkbyBhcnTDrXN0aWNhbWVudGUgY29tbyBCYWQgQnVubnksIGVzIHVuIHJhcGVybywgY2FudGFudGUsIGNvbXBvc2l0b3IsIHByb2R1Y3RvciBtdXNpY2FsIHkgbHVjaGFkb3IgcHJvZmVzaW9uYWwgcHVlcnRvcnJpcXVlw7Fv","U3UgZXN0aWxvIGRlIG3DunNpY2EgZXMgZ2VuZXJhbG1lbnRlIGRlZmluaWRvIGNvbW8gdHJhcCBsYXRpbm8geSByZWd1ZXTDs24sIHBlcm8gdGFtYmnDqW4gaGEgaW50ZXJwcmV0YWRvIG90cm9zIGfDqW5lcm9zIGNvbW8ga2l6b21iYSB5IG5vcnRlw7FvLiBTZSBjYXJhY3Rlcml6YSBwb3Igc3UgZW50b25hY2nDs24gZ3JhdmUsIHNpbiBuaW5ndW5hIHTDqWNuaWNhIHZvY2FsIHkgc3UgZXN0aWxvIGRlIHZlc3Rpci4=","RW1wZXrDsyBhIGdhbmFyIHBvcHVsYXJpZGFkIGVuIFNvdW5kQ2xvdWQgeSBldmVudHVhbG1lbnRlLCBmaXJtw7MgdW4gY29udHJhdG8gY29uIHVuIHNlbGxvIGRpc2NvZ3LDoWZpY28gbWllbnRyYXMgdHJhYmFqYWJhIGNvbW8gZW1wYXF1ZXRhZG9yIGVuIHVuIHN1cGVybWVyY2FkbyB5IGVzdHVkaWFiYSBlbiBsYSBVbml2ZXJzaWRhZCBkZSBQdWVydG8gUmljbyBlbiBBcmVjaWJvLiBEZXNwdcOpcyBkZWwgw6l4aXRvIGRlIHN1IHNlbmNpbGxvIMKrU295IFBlb3LCuyBlbiAyMDE2LCBhbGNhbnrDsyBsYSBmYW1hIHRyYXMgY29sYWJvcmFyIGNvbiBsb3MgYXJ0aXN0YXMgQ2FyZGkgQiB5IERyYWtlIGVuIGxvcyBzZW5jaWxsb3MgwqtJIExpa2UgSXTCuyB5IMKrTWlhwrsgcXVlIGFsY2FuemFyb24gZWwgcHJpbWVyIHkgdGVyY2VyIHB1ZXN0byBlbiBsYSBsaXN0YSBCaWxsYm9hcmQgSG90IDEwMCByZXNwZWN0aXZhbWVudGUu","U3Ugw6FsYnVtIGRlIGVzdHVkaW8gZGVidXQgWCAxMDBwcmUgKDIwMTgpIGdhbsOzIGVsIEdyYW1teSBMYXRpbm8gcG9yIG1lam9yIMOhbGJ1bSBkZSBtw7pzaWNhIHVyYmFuYSB5IGVudHLDsyBlbiBsYSBsaXN0YSBkZSBsb3MgNTAwIG1lam9yZXMgw6FsYnVtZXMgbXVzaWNhbGVzIGRlIHRvZG9zIGxvcyB0aWVtcG9zLCBzZWfDum4gbGEgcmV2aXN0YSBSb2xsaW5nIFN0b25lLCBvY3VwYW5kbyBlbCBsdWdhciA0NDcu"];
var words3G=[];
var c1=[181,168,214,212];
var c2=[229,229,456,230];
var c3=[];
