/**
 * @author Dylan Culfogienis
 * @email dtc9bb@virginia.edu
 * @date 9/17/2018
 * @file interactive.js
 * @brief Javascript for interactive cell simulation. Heavily inspired by
 * Luca Spardella's D3 Game of Life implementation.
 */

d3 = require('d3');

$(document).ajaxStop(function() {
    /*
      var sampleSVG = d3.select(".petri")
      .append("svg")
      .attr("width", 100)
      .attr("height", 100);    

      sampleSVG.append("circle")
      .style("stroke", "gray")
      .style("fill", "white")
      .attr("r", 40)
      .attr("cx", 50)
      .attr("cy", 50)
      .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
      .on("mouseout", function(){d3.select(this).style("fill", "white");});
    */
    var interactive = d3.select("petri");
    var dim = Math.min(d3.getSize(interactive.style('width')), d3.getSize(interactive.style('height')));
    var petri = interactive
        .append("svg")
        .attr("width", dim)
        .attr("height", dim);

    var gridSpacing = 10, // Repeat distance in pixels between cells
        tick = 5,
        Ny = Math.floor(dim / (gridSpacing * Math.sin(Math.PI / 3))),
        Nx = Math.floor(dim / gridSpacing),
        sim = cellSim(Nx, Ny),
        display = cellDisplay(),
        radius = delta/2 - 2,
        grid = d3.map();
    
    draw();
    load();
    d3.timeout(redraw);

    function cellSim() {
        var cells = d3.map();
        var inactive = d3.map();
        var active = d3.map();
            
        return {
            init: init,
            step: step,
            add: add
        };

        function init(data) {

        }

        function step() {

        }

        function add() {
        }
    }
    
    function cellDisplay() {
        var d_cells, d_active;
        
        return {
            init: init,
            draw: draw,
            d_cells: d_cells,
            d_active: d_active
        };

        function init() {
            d_inactive = petri.append('g').classed('cell', true);
            d_active = petri.append('g').classed('active', true);
        } 

        function draw() {
            // Start by grabbing data for currently inactive cells and joining
            // it with currently displayed (if any) inactive circles
            var current = display.d_inactive.selectAll('circle').data(sim.inactive); 

            current
                .enter() // Required to create new circles if we have more data than elements
                .append('circle') // We're displaying with circles here
                .attr('r', radius) // Set circle radius
                .merge(current) // combine new displayed cells with old ones
                //.style('fill') // Can take a function and return a value or just a value.
                .attr('cx', function (d) { // Set x coordinate
                })
                .attr('cy', function (d) { // Set y coordinate
                });
            
            // Do the same but for active cells
            current = display.d_active.selectAll('circle').data(sim.active);

            current
                .enter() // Required to create new circles if we have more data than elements
                .append('circle') // We're displaying with circles here
                .attr('r', radius) // Set circle radius
                .merge(current) // combine new displayed cells with old ones
                //.style('fill', function(d)) // Can take a function and return a value or just a value.
                .attr('cx', function (d) { // Set x coordinate
                })
                .attr('cy', function (d) { // Set y coordinate
                });

            d3.timeout(draw, tick);
        }
    }
});
