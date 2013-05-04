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
            label: "Demand in the United States",
            data: [ [0, 0], [1, 1], [2, 1], [3,2] ],
            lines: {show: true},
            points: {show: true}


        },
        {
            label: "Demand in the European Union",
            data: [[0, 0], [1, 3], [2,5] [3, 8]],
            lines: {show: true},
            points: {show: true}
         },

        {

            label: "Demand in the Asian Pacific",
            data: [[0, 0], [1, 10], [2,4], [3,9]],
            lines: {show: true},
            points: {show: true}

        },


         {
             label: "Number of Web Servers in North America",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: {show: true},
             points: {show: true}   
         },

         {
             label: "Number of Web Servers in the European Union",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: {show: true},
             points: {show: true}   

         },

         {
             label: "Number of Web Servers in the Asian Pacific",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: {show: true},
             points: {show: true}   

         },

         {
             label: "Number of Java Servers in the United States",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: {show: true},
             points: {show: true}   

         },
         {
             label: "Number of Java Servers in the European Union",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: {show: true},
             points: {show: true}   

         },
         {
             label: "Number of Java Servers in the Asian Pacific",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: {show: true},
             points: {show: true}   

         },
         {
             label: "Number of Database Servers in the United States",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: {show: true},
             points: {show: true}   

         },
         {
             label: "Number of Database Servers in the European Union",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: {show: true},
             points: {show: true}   

         },
         {
             label: "Number of Database Servers in the Asian Pacific",
             data: [ [0, 0], [1, 4], [2, 15], [3,0] ],
             lines: {show: true},
             points: {show: true}   

         },

         {
            label: "Profit",
            data: [ [0, 0], [1, 5.3], [2, 13.53], [3, 8.78] ],
            lines: {show: true},
            points: {show: true}   

        }
          
    ]
);
}
                 );
