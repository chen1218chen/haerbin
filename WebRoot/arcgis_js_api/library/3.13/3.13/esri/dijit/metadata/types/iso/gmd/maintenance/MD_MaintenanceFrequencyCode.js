// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/maintenance/templates/MD_MaintenanceFrequencyCode.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListElement"\r\n\t\tdata-dojo-props\x3d"target:\'gmd:MD_MaintenanceFrequencyCode\'"\x3e\r\n\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListAttribute"\r\n\t\t\tdata-dojo-props\x3d"value:\'${codeListPrefix}MD_MaintenanceFrequencyCode\'"\x3e\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListValueAttribute"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.continual}\',value:\'continual\'"\x3e\x3c/div\x3e\t\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.daily}\',value:\'daily\'"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.weekly}\',value:\'weekly\'"\x3e\x3c/div\x3e\t\t\t\t\t\t\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.fortnightly}\',value:\'fortnightly\'"\x3e\x3c/div\x3e\t\t\t\t\t\t\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.monthly}\',value:\'monthly\'"\x3e\x3c/div\x3e\t\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.quarterly}\',value:\'quarterly\'"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.biannually}\',value:\'biannually\'"\x3e\x3c/div\x3e\t\t\t\t\t\t\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.annually}\',value:\'annually\'"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.asNeeded}\',value:\'asNeeded\'"\x3e\x3c/div\x3e\t\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.irregular}\',value:\'irregular\'"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.notPlanned}\',value:\'notPlanned\'"\x3e\x3c/div\x3e\t\t\t\t\t\t\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nIso.MD_MaintenanceFrequencyCode.unknown}\',value:\'unknown\'"\x3e\x3c/div\x3e\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/maintenance/MD_MaintenanceFrequencyCode","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/InputSelectOne ../../../../form/Options ../../../../form/Option ../../../../form/iso/CodeListAttribute ../../../../form/iso/CodeListValueAttribute ../../../../form/iso/CodeListElement ../../../../form/iso/CodeSpaceAttribute dojo/text!./templates/MD_MaintenanceFrequencyCode.html ../../../../../../kernel".split(" "),function(a,b,
c,d,g,h,k,l,m,n,p,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.maintenance.MD_MaintenanceFrequencyCode",a,f);return a});