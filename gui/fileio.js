//jquery ajax call to open data file
$.ajax({url: "data.txt", success: function(data) {
    alert("yay, it worked!");
    alert(data);
}});
