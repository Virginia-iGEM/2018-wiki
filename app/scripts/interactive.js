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
        divprob = 0.1,
        sim = cellSim(Nx, Ny, divprob),
        display = cellDisplay(),
        radius = delta/2 - 2,
        grid = d3.map();
    
    display.draw();
    sim.init();
    sim.loadRandom();
    d3.timeout(display.draw);


    function cellSim(N, M, dp) {
        var cells = d3.map();
        var inactive = d3.map();
        var active = d3.map();
            
        return {
            loadRandom: loadRandom,
            reset: reset, // Initialize the simulation; resets
            step: step, // One step of simulation
            add: add // Add cells to the simulation
        };

        function loadRandom(p) {
            var n = Math.floor((p || 0.05)*N*M), // How many cells are we loading in
                i = d3.randomUniform(0,  N-1), // Randomly generate positions on the X axis
                j = d3.randomUniform(1, M), // Randomly generate positions on the Y axis
                d;

            for (var k=0; k < n; k++) {
                d = [Math.floor(i()) + 1, Math.floor(j()) + 1];
                cells.set(d, d);
                inactive.set(d, d);
            }
        }

        function reset(data) {
            cells.clear();
        }

        function step() {
            if (cells.size() > 0) {
                cells.each(function (cell, key) {
                    
                });
            }
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

        }

        function redraw() {
            sim.step();
            draw();
            d3.timeout(redraw, tick);
        }
    }
});
