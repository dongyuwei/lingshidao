var iFlag;
function search() {
 var wPopupElements=wPopup.document.all;
 iFlag=0;
 if (wPopupElements.searchtext.value==null || wPopupElements.searchtext.value=='')
  {
   wPopup.alert("������ؼ���");
   return;
  }
 if (rng.findText(wPopupElements.searchtext.value,10000,iFlag)==true)
  {
   rng.select();
   rng.scrollIntoView();
   rng.moveStart("character");
  }
 else 
  {wPopup.alert("�Ѿ������ļ�ĩβ");}
}
function gofind() {
wPopup=window.open('about:blank','','width=350 height=80 left=200 top=200 menubar=no resizeable=no scrollbars=no toolbar=no');
var wPopupDoc=wPopup.document;
wPopupDoc.open();
wPopupDoc.write('<html>\n');
wPopupDoc.write('<head>\n');
wPopupDoc.write('<title>��ҳ�ڲ�����</title>\n');
wPopupDoc.write('<style>\n');
wPopupDoc.write('* {font-size:9pt;font-family:"����"}\n');
wPopupDoc.write('button {width:80}\n');
wPopupDoc.write('</style>\n');
wPopupDoc.write('</head>\n');
wPopupDoc.write('<body bgcolor="#7E92D6" text="#393939" leftmargin="0" topmargin="0">\n');
wPopupDoc.write('<p> </p><br><br><center>�ؼ���:\n');
wPopupDoc.write('<input type="text" name="searchtext" onchange="window.opener.rng=window.opener.document.body.createTextRange()">\n');
wPopupDoc.write('<button accesskey="S" name="searchbutton" onclick="window.opener.search()">����</button>\n');
wPopupDoc.write('<center></body>\n');
wPopupDoc.write('</html>\n');
wPopupDoc.close();
}