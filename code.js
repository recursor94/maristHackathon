var map;
var marist = new google.maps.LatLng(41.722667,-73.934256); //roughly the center of marist
var textRequest = {
    location: marist,
    query: "food",
    radius: "500",
}; //default request object, searches for query in a 500m radius around marist
var addresses = [];
var formattedAddress = [];
var dynamicID = "output";

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
	    //    console.log(dynamicID);
	    dynamicID += i;
	    //    console.log(dynamicID);
	    addresses.push(results[i].formatted_address);

	    output.value += results[i].name + "\n";
	    document.getElementById(dynamicID).value = results[i].name;
	    console.log(dynamicID);


	    removedUS = removingExtraUS(results[i].formatted_address) + "\n";
	    formattedAddress.push(removedUS);

	    output.value += removedUS;
	    //    dynamicID.value = removedUS;

	    dynamicID = dynamicID.substring(0,6);
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
    for(var i = 0; i < 10; i++){
	dynamicID += i;
	//dynamicID.value = "";
	dynamicID = dynamicID.substring(0,6);
    }
    printLocations();
}

/*
function dynamicIDChanger(i){ //use with a for loop [0,10)
    dynamicID += i;
//    console.log(dynamicID);
    dynamicID = dynamicID.substring(0,6);
    }
*/

function doClick(buttonName,e){
  //the purpose of this function is to allow the enter key to 
  //point to the correct button to click.
    var ev = e || window.event;
    var key = ev.keyCode;

    if (key == 13)
    {
	//alert("key is enter");
    //Get the button the user wants to have clicked
	var btn = document.getElementById('button');
	if (btn != null)
	{ 
        //If we find the button click it
            btn.click();
            ev.preventDefault(); 
	}
    }
}

window.onload = function() {
//    document.getElementById('button').onclick = changeValue(input.value);
    document.getElementById('input').onkeypress = function(e) {
	doClick('button', e);
    };

};

google.maps.event.addDomListener(window, "load", initialize);