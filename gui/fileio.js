//jquery ajax call to open data file
$.ajax({url: "data.txt", success: function() {
    alert("yay, it worked!");
    alert(url);
}});
