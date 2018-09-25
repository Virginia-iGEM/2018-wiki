/**
 * @author Dylan Culfogienis
 * @email dtc9bb@virginia.edu
 * @date 9/17/2018
 * @file interactive.js
 * @brief Javascript for interactive cell simulation. Heavily inspired by
 * Luca Spardella's D3 Game of Life implementation.
 */

var d3 = require('d3');

$(document).ajaxStop(function() {
    // Set interactive height to be equal to the width
    $('.petri').css('height', $('.petri').css('width'));

    // Grab our <div> container
    var container = d3.select('.petri');
    var dim = parseInt(container.style('width'));

    var cellRadius = 14; // Global of cells in pixels

    var nodes = d3.range(8).map(function() {return {
        radius: cellRadius - 2,
        splitprob: 1,
        age: 1,
        angle: Math.random() * Math.PI * 2};}); // Start with just one cell
    
    // Establish data - this is what our simulation and display draws from
    // Establish simulation - this handles the physics portion of things
    var simulation = d3.forceSimulation(nodes)
        .force('charge', d3.forceManyBody().strength(1).distanceMax(cellRadius * 7)) // Repulse cells 
        .force('center', d3.forceCenter()) // Push cells towards center
        .force('collision', d3.forceCollide(function(d) {return d.radius;})) // Make cells collide with each other
        .velocityDecay(0.5)
        .alphaTarget(0.8) // Make solver settle more quickly
        .on('tick', ticked); // Call any functions that need to run every time the simulation ticks

    // Establish SVG drawing
    var svg = container.append('svg').attr('width', dim).attr('height', dim);
    // Add styling to center container
    var g = svg.append('g').attr('transform', 'translate(' + dim / 2 + ',' + dim / 2 + ')');
    // This is the group we'll actually draw cells to
    var node = g.append('g').selectAll('.node').attr('class', 'nodes');

    // Call the grow function every 5 seconds; cells will duplicate
    var timer = d3.interval(function() {
        restart(grow());
    }, 2000);

    var color = d3.scaleSequential(d3.interpolateLab("white", "#f7b958"))
        .domain([0, 1]);

    // transition
    var t = d3.transition()
        .duration(750);

    function restart(nodes) {

        node = node.data(nodes);

        // Exit any nodes that don't make good data points
        /*
        node.exit()
            .style('fill', '#b26745')
            .transition(t)
            .attr('r, 1e-6')
            .remove();
        */

        // Transition new nodes
        node
            .transition(t)
            .style('stroke', function(d) {return color(d.splitprob);})
            .style('stroke-width', 6)
            .style('stroke-linecap', 'round');

        // Transition new nodes
        node = node.enter().append('line')
            .style('stroke', function(d) {return color(d.splitprob);})
            .style('stroke-width', 4)
            .style('stroke-linecap', 'round')
            //.transition(t)
            .merge(node);

        if (nodes.length >= 300) {
            node
                .transition(t)
                .style('stroke', '#fff')
                .attr('stroke-width', 6);
        }
        simulation.nodes(nodes);
    }

    // Required to update displayed position of nodes with force simulation
    function ticked() {
        node.attr('x1', function(d) {return Math.cos(d.angle) * (d.radius - 4) + d.x;})
            .attr('y1', function(d) {return Math.sin(d.angle) * (d.radius - 4) + d.y;})
            .attr('x2', function(d) {return Math.cos(d.angle) * -(d.radius - 4) + d.x;})
            .attr('y2', function(d) {return Math.sin(d.angle) * -(d.radius - 4) + d.y;});
    }

    var furthest = 0;
    var growing = true;

    function grow() {
        // Stop growing if we have over 250 cells
        if (nodes.length < 300) {
            var newNodes = [];
            // For each existing cell, there is some probability of splitting
            nodes.forEach(function(n) {
                //console.log(n.age);
                //console.log(n);
                if (Math.random() < n.splitprob) {
                    var nx = n.x,
                        ny = n.y;
                    var mag = Math.sqrt(Math.pow(nx,2) + Math.pow(ny, 2));
                    var rnx = cellRadius * (Math.random() - 0.5) * 2;
                    var rny = cellRadius * (Math.random() - 0.5) * 2;
                    nx = nx + cellRadius * (nx) / mag + rnx;
                    ny = ny + cellRadius * (ny) / mag + rny;

                    mag = Math.sqrt(Math.pow(nx, 2) + Math.pow(ny, 2));
                    if (mag > furthest) {
                        furthest = mag;
                    }

                    //var nx = Math.random() * cellRadius * 2;
                    //var ny = Math.random() * cellRadius * 2;


                    //var nx = Math.random() * 10;
                    // var ny = Math.random() * 10;

                    newNodes.push({radius: cellRadius - 2,
                                   x: nx,
                                   y: ny,
                                   splitprob: 1,
                                   age: 1,
                                   angle: n.angle + (Math.random() - 1) * Math.PI / 3 });
                }
            });

            nodes = nodes.concat(newNodes);

            //Scale splitprob based on how far out cells are and their age
            nodes.forEach(function(n) {
                var mag = Math.sqrt(Math.pow(n.x, 2) + Math.pow(n.y, 2));
                n.splitprob = Math.pow(n.age, 9) * Math.pow(Math.min(mag / furthest, 1), 1/10);
                //console.log(n.splitprob);
                n.age = n.age * 0.85;
            });
        }
        else {
            timer.stop();
        }
        return nodes;
    }
});
    /*
    var drag = simulation => {
        
        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        
        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }
        
        function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    };
    */

