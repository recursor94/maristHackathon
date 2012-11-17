
function updateDisplay(message){
	display.value = message + "\n \n" + display.value;
}

function onClickCommands(){
var maristCor = new google.maps.LatLng( 41.722667,-73.934256);
}

function printout(value){
for(var i = 0; i<value.length; i++){
console.log(value[i]);
}
}

function test(){

var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.722667,-73.934256&radius=500&types=food&sensor=false&key=AIzaSyCjbp32tQBOwSaU0g65BYpM30ezLQ93dxQ';

$.getJSON(test.json, function(data){
  var items = [];
console.log("RAN");
  $.each(data, function(key, val) {
    items.push('<li id="' + key + '">' + val + '</li>');
  });

  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('body');
});


}