// Add in the module
var MapModule = require('ti.map');

var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	navBarHidden : true,
	exitOnClose : true
});

var map1 = MapModule.createView({
	userLocation : true,
	mapType : MapModule.NORMAL_TYPE,
	animate : true,
	region : {
		latitude : -33.87365,
		longitude : 151.20689,
		latitudeDelta : 0.1,
		longitudeDelta : 0.1
	},
	height : '70%',
	top : 50,
	left : 10,
	right : 10
});

win.add(map1);
win.open(); 