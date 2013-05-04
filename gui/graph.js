/* This is the code for the graph that plots the ten game server
 ** integer outputs, which are server info plus profit. */

//written by Andrew Spano, uses flot.js and jquery.js

/*whole function must be wrapped in a jquery document.ready
 *to avoid loading before the html */


//trying to establish dynamic graph, making parameters into vars themselves
var lines = new Array();
var plots = new Array();

for(var i = 0; i < 13; i = i + 1) {

    lines[i] = {show: true};
    plots[i] = {show: true};

}
$(document).ready( function () {
$.plot (
    $("#placeholder"),
    [
        {
            label: "Demand in the United States",
            data: [ [0, 0], [1, 1], [2, 1], [3,2] ],
            lines: lines[0],
            points: plots[0]


        },
        {
            label: "Demand in the European Union",
            data: [[0, 0], [1, 3], [2,5] [3, 8]],
            lines: lines[1],
            points: plots[1]
         },

        {

            label: "Demand in the Asian Pacific",
            data: [[0, 0], [1, 10], [2,4], [3,9]],
            lines: lines[2],
            points: plots[2]

        },


         {
             label: "Number of Web Servers in North America",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: lines[3],
             points: plots[3]
         },

         {
             label: "Number of Web Servers in the European Union",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: lines[4],
             points: plots[4]

         },

         {
             label: "Number of Web Servers in the Asian Pacific",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: lines[5],
             points: lines[5]

         },

         {
             label: "Number of Java Servers in the United States",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: lines[6],
             points: plots[6]

         },
         {
             label: "Number of Java Servers in the European Union",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: lines[7],
             points: plots[7]

         },
         {
             label: "Number of Java Servers in the Asian Pacific",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: lines[8],
             points: plots[8]

         },
         {
             label: "Number of Database Servers in the United States",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: lines[9],
             points: plots[9]

         },
         {
             label: "Number of Database Servers in the European Union",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: lines[10],
             points: plots[10]

         },
         {
             label: "Number of Database Servers in the Asian Pacific",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: lines[11],
             points: plots[11]

         },

         {
            label: "Profit",
            data: [ [0, 0], [1, 5.3], [2, 13.53], [3, 8.78] ],
            lines: lines[12],
            points: plots[12]

        }
          
    ]
);
}
                 );
