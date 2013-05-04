/* This is the code for the graph that plots the ten game server
 ** integer outputs, which are server info plus profit. */

//written by Andrew Spano, uses flot.js and jquery.js

/*whole function must be wrapped in a jquery document.ready
 *to avoid loading before the html */
$(document).ready( function () {
$.plot (
    $("#placeholder"),
    [
        {
            label: "Demand per region",
            data: [ [0, 0], [1, 1], [2, 1], [3,2] ],
            lines: {show: true},
            points: {show: true}


        },
        {
            label: "Number of Webservers",
            data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
            lines: {show: true},
            points: {show: true}   
        }
    ]
);
}
                 );
