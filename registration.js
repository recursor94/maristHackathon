
function submitChanges(){
    console.log("Changes submitted");
    //create http request?
}

function classSearch(){
    console.log("classSearch() called");
}

function reset(){
    document.getElementById("crn_id1").value = "";
    document.getElementById("crn_id2").value = "";
    document.getElementById("crn_id3").value = "";
}

function auto(){
    document.getElementById("crn_id1").value = "2000";
    document.getElementById("crn_id2").value = "3000";
    document.getElementById("crn_id3").value = "4000";
    document.getElementById("crn_id4").value = "5000";
    document.getElementById("crn_id5").value = "6000";
    document.getElementById("crn_id6").value = "7000";
    document.getElementById("crn_id7").value = "8000";
    document.getElementById("crn_id8").value = "9000";
    document.getElementById("crn_id9").value = "1000";
    document.getElementById("crn_id10").value = "1100";
}

window.onload = function() {
    //    auto();

    console.log("auto()");
    console.log(document.getElementsByName("REG_BTN").item(0));
    document.getElementsByName("REG_BTN").item(0).click();    

//    var maristWindow = window.open(document.getElementById("marist").href);
    var maristWindow = window.open("http://www.google.com");
    console.log("created maristWindow: " + maristWindow.name);   
    console.log(document.getElementById("marist").href);
    console.log(maristWindow.document);
    
    console.log("username: " + maristWindow.document.getElementsByName("username").value);
    maristWindow.document.getElementsByName("username").value = "antony.liang1"; //doesn't work   

    //simulate keyboard input
    console.log("username entered: " + maristWindow.document.getElementsByName("username").value);


    maristWindow.document.getElementsByName("password").value = "password"; //doesn't work
    //simulate keyboard input

    console.log("password entered");
	
//    maristWindow.document.getElementsByName("submit").item(0).click();

    //submit with alt+l
//    console.log(maristWindow.document.getElementsByName("submit").item(0));
}
