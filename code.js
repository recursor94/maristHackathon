var map;
var marist = new google.maps.LatLng(41.722667,-73.934256);
var textRequest = {
		location: marist,
		query: "food",
        radius: "500",
        };
		
		
function initialize() {
    map = new google.maps.Map(document.getElementById("map"), {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: marist,
        zoom: 15
        });
}

function printLocations(){
    var service = new google.maps.places.PlacesService(map);
    service.textSearch(textRequest, callbackTen);
}


function printAllLocations(){
    var service = new google.maps.places.PlacesService(map);
    service.textSearch(textRequest, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
        output.value += results[i].name + "\n";
		output.value += removingExtraUS(results[i].formatted_address) + "\n";
        }
    }
}

function callbackTen(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < 10; i++) {
        output.value += results[i].name + "\n";
		output.value += removingExtraUS(results[i].formatted_address) + "\n";
        }
    }
}

function removingExtraUS(original){
	var temp = original;
	for(var i=1; i < original.length; i++){
		if(temp.substring(0, 4) === " NY,") break;
		temp = temp.substring(1);
	}
	return original.substring(0, i - 2);
}	

function changeValue(value){
	if (value != ""){
		textRequest.query = value;
		input.value = "";
	}
	output.value = "";
	printLocations();
}

google.maps.event.addDomListener(window, "load", initialize);