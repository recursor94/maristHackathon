var map;
var marist = new google.maps.LatLng(41.722667,-73.934256); //roughly the center of marist

var textRequest = {
    location: marist,
    query: "food",
    radius: "500",
}; //default request object, searches for query in a 500m radius around marist
var formattedAddress = [];
var dynamicID = "output";
var dynamicBtn = "outputbtn";
var dynamicInfo = "info";
var info = {
    rating: null,
    phone: "not given",
    website: "not given",
};
var placeArray = [];
function place (rating, phone, website){
    this.rating = rating;
    this.phone = phone;
    this.website = website;
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
	    dynamicID += i;
	    dynamicBtn += i; 

	    document.getElementById(dynamicID).value += results[i].name + "\n";

	    removedUS = removingExtraUS(results[i].formatted_address) + "\n";
	    formattedAddress.push(removedUS);
	    document.getElementById(dynamicID).value += removedUS;
	    
	    var r = 0;
	    var p = "Not given";
	    var w = "Not given";
	  
	    if(results[i].rating != undefined) r = results[i].rating;
	    if(results[i].phone != undefined) p = results[i].phone;
	    if(results[i].website != undefined) w = results[i].website;

	    var temp = new place(r, p, w);
	    placeArray.push(temp);

	    console.log("rating: " + results[i].rating);
/*
	    console.log(results[i]);
            console.log(results[i].types);//gives an array of it's tags
	    if(results[i].opening_hours != undefined){
		console.log("opening now: " + results[i].opening_hours.open_now);//returns if open now or not
	    }
	    console.log("rating: " + results[i].rating);
	    console.log("formatted address: " + results[i].formatted_address);
	    console.log("website: " + results[i].website);
*/

	    dynamicID = dynamicID.substring(0,6);
	    dynamicBtn = dynamicBtn.substring(0,9);
	}
    }
}

function moreInfo(index,id){
//    console.log(placeArray[index].rating);
/*
    tagid = dynamicInfo + index;
    console.log(document.getElementById(tagid));
*/
    var element = document.getElementById(id);

    if(element.style.display == 'none'){
	element.style.display = 'block';
    }
    else{
	element.style.display = 'none'; 
    }
//    dynamicInfo = dynamicInfo.substring(0,4);
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
    for(var i = 0; i < 10; i++){
	dynamicID += i;
	document.getElementById(dynamicID).value = "";
	dynamicID = dynamicID.substring(0,6);
    }
    for(var i = 0; i < 10; i++){
	dynamicID += i;
	dynamicID = dynamicID.substring(0,6);
    }
    
    printLocations();
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
    for(var i = 0; i < 9; i++){
	dynamicInfo += i;
	document.getElementById("info" + i).style.display = 'none';
	dynamicInfo = dynamicInfo.substring(0,4);
    }
};

google.maps.event.addDomListener(window, "load", initialize);