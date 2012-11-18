var map;
var marist = new google.maps.LatLng(41.722667,-73.934256); //roughly the center of marist
var textRequest = {
    location: marist,
    query: "food",
    radius: "500",
}; //default request object, searches for query in a 500m radius around marist
var formattedAddress = [];
var dynamicID = "output";
var dynamicInfo = "info";
var placeArray = [];
var searched = false;

function place (phone, rating, types, website, reference){
    this.phone = phone;
    if(rating == 0){
	this.rating = "Not rated";
    }
    else{
	this.rating = rating + "/5";
    }
    this.types = types;
    this.website = website;
    this.reference = reference;
}

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
	    placeArray.pop();
	}

	for (var i = 0; i < 10; i++) {
	    dynamicID += i;

	    document.getElementById(dynamicID).value += results[i].name + "\n";

	    removedUS = removingExtraUS(results[i].formatted_address) + "\n";
	    formattedAddress.push(removedUS);
	    document.getElementById(dynamicID).value += removedUS;
	    var p = "Not given";
	    var r = 0
	    var t = "Not given";
	    var w = "Not given";
	    var ref = "";

	    if(results[i].phone != undefined) p = results[i].formatted_phone_number;

//	    console.log(results[i]);

	    if(results[i].rating != undefined) r = results[i].rating;
	    if(results[i].types != undefined) t = results[i].types;
	    if(results[i].website != undefined) w = results[i].website;
	    ref = results[i].reference;
	    var temp = new place(p, r, t, w, ref);
	    placeArray.push(temp);

	    dynamicID = dynamicID.substring(0,6);
	}
    }
}

function moreInfo(index,id){    
    var element = document.getElementById(id);

    //reveal/hide
    if(searched == true){
	if(element.style.display == 'none'){
	    element.style.display = 'block';
	}
	else{
	    element.style.display = 'none'; 
	}
	element.value = "";

//	element.value += "Phone Number: " + placeArray[index].phone + "\n";
	element.value += "Rating: " + placeArray[index].rating + "\n";	
	element.value += "Tags: " + placeArray[index].types + "\n";
//	element.value += "Website: " + placeArray[index].website + "\n";
    }
}

//cuts off the NY, United States in the address, returns the address without it
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
    for(var i = 0; i < 10; i++){
	dynamicID += i;
	document.getElementById(dynamicID).value = ""; //clears the field for the next search
	dynamicID = dynamicID.substring(0,6);
    }
    //close "more info" before showing new results
    for(var i = 0; i < 10; i++){
	dynamicInfo += i;
	var element = document.getElementById(dynamicInfo);
	element.style.display = 'none'; 
	dynamicInfo = dynamicInfo.substring(0,4);
    }
    
    printLocations();
    searched = true;
}

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
	doClick('button', e)
    };
    for(var i = 0; i < 10; i++){
	dynamicInfo += i;
	document.getElementById("info" + i).style.display = 'none';
	dynamicInfo = dynamicInfo.substring(0,4);
    }
	topRight();
};

google.maps.event.addDomListener(window, "load", initialize);