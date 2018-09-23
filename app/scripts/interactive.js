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
      */

    var interactive = d3.select(".petri");

    var dim = Math.min(parseInt(interactive.style('width')), parseInt(interactive.style('height')));
    var petri = interactive
        .append("svg:svg")
        .attr("width", dim)
        .attr("height", dim);

    var gridSpacing = 10, // Repeat distance in pixels between cells
        tick = 500,
        Ny = Math.floor(dim / (gridSpacing * Math.sin(Math.PI / 3))),
        Nx = Math.floor(dim / gridSpacing),
        divprob = 0.1,
        radius = gridSpacing/2 - 2,
        grid = d3.map();

    var d_inactive,
        d_active;

    var cells;

    //init();
    loadRandom(0.25);
    draw();
    
    //var nodes = d3.range(200).map(function(i) { return {x: 50*(i % 10), y: 50*(Math.floor(i / 10)), radius: Math.random() * 18 + 5}; });

    petri.selectAll("circle")
        .data(cells)
        .enter().append("svg:circle")
        .attr("r", function(d) { return radius; })
        .style("fill", function(d, i) { return '#ffffff'; })
        .attr("cx", function(d) { return (d.x + 0.5 * (d.y % 2))* gridSpacing; })
        .attr("cy", function(d) { return d.y * gridSpacing * Math.sin(Math.PI / 3); })
        .on("mouseover", function(){d3.select(this).style("fill", "red");})
        .on("mouseout", function(){d3.select(this).style("fill", "white");});

    function loadRandom(p) {
        var n = Math.floor((p || 0.05)*Nx*Ny), // How many cells are we loading in
            i = d3.randomUniform(0,  Nx-1), // Randomly generate positions on the X axis
            j = d3.randomUniform(1, Ny), // Randomly generate positions on the Y axis
            d;

        cells = d3.range(n).map(function(k) {
            var x = Math.floor(i()) + 1,
                y = Math.floor(j()) + 1;
            return {x: x,
                    y: y};
        });
    }

    function step() {
        if (cells.size() > 0) {
            cells.each(function (cell, key) {

            });
        }
    }

    function draw() {
    }

    function add() { // TBI: Add a single cell

    }

    function neighbors(c) {
        // Key:
        // 0: [n - 1, m + 1]
        // 1: [n, m + 1]
        // 2: [n + 1, m]
        // 3: [n, m - 1]
        // 4: [n - 1, m - 1]
        // 5: [n - 1, m]

        var n = c[0],
            m = c[1];
        return [
            cells[n - 1, m + 1],
            cells[n, m + 1],
            cells[n + 1, m],
            cells[n, m - 1],
            cells[n - 1, m - 1],
            cells[n - 1, m]
        ];
    }

    function redraw() {
        step();
        draw();
        d3.timeout(redraw, tick);
    }
});
