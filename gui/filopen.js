var txt = ''
var xmlhttp.onreadystatechange = function () {
    if(xmlhttp.status==200 && xmlhttp.readyState==4) {
        txt=xmlhttp.responseText;
    }
};
xmlhttp.open("GET", "data.txt", true);
xmlhttp.send();
