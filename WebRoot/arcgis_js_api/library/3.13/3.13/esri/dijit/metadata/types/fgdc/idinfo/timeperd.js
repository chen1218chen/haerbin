// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/idinfo/templates/timeperd.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\tdata-dojo-props\x3d"target:\'timeperd\',label:\'${i18nFgdc.idinfo.timeperd.caption}\'"\x3e\t\r\n\t\t\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/timeinfo/timeinfo"\x3e\x3c/div\x3e\r\n\t\t\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\tdata-dojo-props\x3d"target:\'current\',\r\n\t\t\t\tlabel:\'${i18nFgdc.idinfo.timeperd.current.caption}\'"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nFgdc.idinfo.timeperd.current.groundCondition}\',value:\'ground condition\'"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nFgdc.idinfo.timeperd.current.publicationDate}\',value:\'publication date\'"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nFgdc.alternates.other}\',value:\'_other\',isOther:true"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\x3c/div\x3e\t\t\t\t\t\t\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\t\r\n\t\t\t\t\t\r\n\t\x3c/div\x3e\r\n\t\t\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/fgdc/idinfo/timeperd","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputSelectOne ../../../form/Options ../../../form/Option ../timeinfo/timeinfo dojo/text!./templates/timeperd.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.idinfo.timeperd",a,f);return a});