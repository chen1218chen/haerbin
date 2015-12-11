var map;
require([ "esri/map",
		"esri/layers/ArcGISDynamicMapServiceLayer" ], function() {
	dojo.parser.parse();
	map = new esri.Map("map", {
			logo : false
	});
	
	var layer = new esri.layers.ArcGISDynamicMapServiceLayer("http://192.168.1.11:6080/arcgis/rest/services/xian/MapServer");
	map.addLayer(layer);

});