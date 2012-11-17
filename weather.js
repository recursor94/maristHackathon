function topRight(){
	$.ajax({
		url: "http://api.aerisapi.com/observations/poughkeepsie,ny?client_id=CHjc2JWkinla0HGe5HveF&client_secret=iN9XpqHPG7s7NjbpvpG1BNLT9UYQNLmH5hPTJuB0",
        dataType: "jsonp",
        success: function(json) {
			if (json.success == true) {
				var ob = json.response.ob;
                document.getElementById("topRight").innerHTML = "The current weather is " + ob.weather.toLowerCase() + " and is " + ob.tempF + " F";
			    {
			    if(ob.tempF < 40){
					document.getElementById("topRight").innerHTML += "<br> It is too cold to go to class. Stay in and get delivery";
				}
			    else if(ob.tempF > 70) {
					document.getElementById("topRight").innerHTML += "<br> It is too hot to go to class. Stay in and get delivery";
				}
			    else
					document.getElementById("topRight").innerHTML += "<br> It is a nice day outside. Why not cut class, go out for a nice walk, and get a good meal?";
				}
			}
		}
	});
}