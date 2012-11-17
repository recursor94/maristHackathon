var map;
var marist = new google.maps.LatLng(41.722667,-73.934256); //roughly the center of marist
var textRequest = {
		location: marist,
		query: "food",
        radius: "500",
        }; //default request object, searches for query in a 500m radius around marist
		
//initializes map		
function initialize() {
    map = new google.maps.Map(document.getElementById("map"), {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: marist,
        zoom: 15
        });
}

//prints out the top ten location
function printLocations(){
    var service = new google.maps.places.PlacesService(map);
    service.textSearch(textRequest, callbackTen);
}

//helper function to printLocation()
function callbackTen(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < 10; i++) {
        output.value += results[i].name + "\n";
		output.value += removingExtraUS(results[i].formatted_address) + "\n";
        }
    }
}

//original printLocations, prints out every location found
function printAllLocations(){
    var service = new google.maps.places.PlacesService(map);
    service.textSearch(textRequest, callback);
}

//original helper function
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
        output.value += results[i].name + "\n";
		output.value += removingExtraUS(results[i].formatted_address) + "\n";
        }
    }
}

//cuts off the NY, United States in the address, returns the address with out it
function removingExtraUS(original){
	var temp = original;
	for(var i=1; i < original.length; i++){
		if(temp.substring(0, 4) === " NY,") break;
		temp = temp.substring(1);
	}
	return original.substring(0, i - 2);
}	

//checks if there is an input. if there is one, then it searches and prints out the results
function changeValue(value){
	if (value != ""){
		textRequest.query = value;
		input.value = "";
	}
	output.value = "";
	printLocations();
}

google.maps.event.addDomListener(window, "load", initialize);