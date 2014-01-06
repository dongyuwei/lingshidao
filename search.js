var iFlag;
function search() {
 var wPopupElements=wPopup.document.all;
 iFlag=0;
 if (wPopupElements.searchtext.value==null || wPopupElements.searchtext.value=='')
  {
   wPopup.alert("请输入关键词");
   return;
  }
 if (rng.findText(wPopupElements.searchtext.value,10000,iFlag)==true)
  {
   rng.select();
   rng.scrollIntoView();
   rng.moveStart("character");
  }
 else 
  {wPopup.alert("已经到达文件末尾");}
}
function gofind() {
wPopup=window.open('about:blank','','width=350 height=80 left=200 top=200 menubar=no resizeable=no scrollbars=no toolbar=no');
var wPopupDoc=wPopup.document;
wPopupDoc.open();
wPopupDoc.write('<html>\n');
wPopupDoc.write('<head>\n');
wPopupDoc.write('<title>本页内部搜索</title>\n');
wPopupDoc.write('<style>\n');
wPopupDoc.write('* {font-size:9pt;font-family:"宋体"}\n');
wPopupDoc.write('button {width:80}\n');
wPopupDoc.write('</style>\n');
wPopupDoc.write('</head>\n');
wPopupDoc.write('<body bgcolor="#7E92D6" text="#393939" leftmargin="0" topmargin="0">\n');
wPopupDoc.write('<p> </p><br><br><center>关键词:\n');
wPopupDoc.write('<input type="text" name="searchtext" onchange="window.opener.rng=window.opener.document.body.createTextRange()">\n');
wPopupDoc.write('<button accesskey="S" name="searchbutton" onclick="window.opener.search()">搜索</button>\n');
wPopupDoc.write('<center></body>\n');
wPopupDoc.write('</html>\n');
wPopupDoc.close();
}