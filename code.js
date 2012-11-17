var map;
var marist = new google.maps.LatLng(41.722667,-73.934256);
var textRequest = {
		location: marist,
		query: "food",
        radius: 500,
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
    service.textSearch(textRequest, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
        console.log(results[i].name);
        }
    }
	console.log("");
}

function changeValue(value){
if (value != ""){
	textRequest.query = value;
	input.value = "";
	}
printLocations();
}

google.maps.event.addDomListener(window, "load", initialize);