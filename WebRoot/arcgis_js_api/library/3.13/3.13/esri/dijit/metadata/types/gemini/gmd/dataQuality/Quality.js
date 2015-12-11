// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/gemini/gmd/dataQuality/templates/Quality.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n\t\tdata-dojo-props\x3d"target:\'gmd:dataQualityInfo\',minOccurs:1,\r\n\t\t\tlabel:\'${i18nIso.MD_Metadata.dataQualityInfo}\'"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n\t\t\tdata-dojo-props\x3d"target:\'gmd:DQ_DataQuality\',minOccurs:0"\x3e\r\n\t\t\t\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n\t\t\t\r\n\t\t\t\t\x3c!-- specific for Gemini --\x3e \r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/gemini/gmd/dataQuality/Scope"\r\n\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.qualitySection.scope}\'"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/dataQuality/ConformanceReport"\r\n\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.qualitySection.conformance}\'"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/dataQuality/Lineage"\r\n\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.qualitySection.lineage}\'"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\x3c/div\x3e\t\r\n\t\t\t\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/gemini/gmd/dataQuality/Quality","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Tabs ../../../../form/iso/AbstractObject ../../../../form/iso/ObjectReference ../../../iso/gmd/dataQuality/ConformanceReport ../../../iso/gmd/dataQuality/Lineage ./Scope dojo/text!./templates/Quality.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.gemini.gmd.dataQuality.Quality",
a,f);return a});