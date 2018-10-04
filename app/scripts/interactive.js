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

    // GENERAL INITIALIZATION
    // Grab our <div> container
    var container = d3.select('.petri');
    // Establish dimensions of simulation
    var dim = parseInt(container.style('width'));
    // Establish SVG drawing
    var svg = container.append('svg').attr('width', dim).attr('height', dim);
    // Add styling to center container
    var g = svg.append('g').attr('transform', 'translate(' + dim / 2 + ',' + dim / 2 + ')');
    // This is the group we'll actually draw cells to
    var node = g.append('g').selectAll('.node').attr('class', 'nodes');

    // PARAMETERS
    // Global radius of grown cells in pixels
    var cellRadius = 14,
        maxColonySize = 250,
        agePower = 1/2,
        distancePower = 2,
        agingFactor = 0.85,
        growthTime = 1000; 

    // SIMULATION/MVC INITIALIZATION
    // Establish our intial cells - just one.
    var initialState = function() {
        return d3.range(1).map(function() {return {
        radius: cellRadius - 2,
        splitprob: 1,
        age: 1,
        angle: Math.random() * Math.PI * 2};}); // Start with just one cell
    };

    var globalNodes = initialState();
    
    // Establish data - this is what our simulation and display draws from
    // Establish simulation - this handles the physics portion of things
    var simulation = d3.forceSimulation(globalNodes)
    // Attract nearby cells, but only within a certain distance
        .force('charge', d3.forceManyBody().strength(1).distanceMax(cellRadius * 7)) 
    // Push cells towards center
        .force('center', d3.forceCenter()) 
    // Make cells collide with each other
        .force('collision', d3.forceCollide(function(d) {return d.radius;})) 
    // Make the medium viscous
        .velocityDecay(0.5)
    // Make solver settle more quickly
        .alphaTarget(0.8) 
    // Call any functions that need to run every time the simulation ticks
        .on('tick', ticked); 

    // Restart with the grow function every 3 seconds; cells will duplicate
    var timer = d3.interval(function() {
        globalNodes = restart(grow(globalNodes));
    }, growthTime);

    // Used to visualize ranges of vars, particularly cell splitprob
    var color = d3.scaleSequential(d3.interpolateLab("white", "#f7b958"))
        .domain([0, 1]);

    // transition function used for display updates
    var t = d3.transition()
        .duration(750);

    var resettingMedium = false;

    // Called every time we need to introduce new nodes, both to the
    // display and the simulation
    function restart(nodes) {

        node = node.data(nodes);

        console.log(nodes.length);
        // Exit any nodes that don't make good data points
        node.exit()
            .style('stroke', '#b26745')
            .transition(t)
            .attr('stroke-width', '1e-6')
            .remove();

        // Transition new nodes
        node
            .transition(t)
            .style('stroke', function(d) {return color(d.splitprob);})
            .style('stroke-width', 6)
            .style('stroke-linecap', 'round');

        // Transition new nodes
        node = node.enter().append('line')
            //.transition(t)
            .style('stroke', function(d) {return color(d.splitprob);})
            .style('stroke-width', 4)
            .style('stroke-linecap', 'round')
            .merge(node);

        if (nodes.length >= maxColonySize) {
            node
                .transition(t)
                .style('stroke', '#fff')
                .attr('stroke-width', 6);
        }
        simulation.nodes(nodes);

        return nodes;
    };

    // Required to update displayed position of nodes with force simulation
    function ticked() {
        node.attr('x1', function(d) {return Math.cos(d.angle) * (d.radius - 4) + d.x;})
            .attr('y1', function(d) {return Math.sin(d.angle) * (d.radius - 4) + d.y;})
            .attr('x2', function(d) {return Math.cos(d.angle) * -(d.radius - 4) + d.x;})
            .attr('y2', function(d) {return Math.sin(d.angle) * -(d.radius - 4) + d.y;});
    }

    var furthest = 0;
    var growing = true;

    // This function is called and passed to reset()
    // It steps the cell growth simulation forward, adding new cells to our list of cells
    function grow(nodes) {
        if(resettingMedium) {
            nodes = initialState();
            furthest = 0;
            resettingMedium = false;
            console.log(nodes);
        }
        //console.log(nodes);
        // Stop growing if we have over 250 cells
        if (nodes.length < maxColonySize) {
            var newNodes = [];
            // For each existing cell, there is some probability of splitting
            nodes.forEach(function(n) {
                // Only split with a certain probability
                if (Math.random() < n.splitprob) {
                    // Establish the new cell's position next to the old one's
                    // Nearly equiaxially to the old one
                    var nx = n.x,
                        ny = n.y;
                    var mag = Math.sqrt(Math.pow(nx,2) + Math.pow(ny, 2));
                    var rnx = cellRadius * (Math.random() - 0.5) * 2;
                    var rny = cellRadius * (Math.random() - 0.5) * 2;
                    nx = nx + cellRadius * Math.cos(n.angle);
                    ny = ny + cellRadius * Math.sin(n.angle);

                    mag = Math.sqrt(Math.pow(nx, 2) + Math.pow(ny, 2));
                    if (mag > furthest) {
                        furthest = mag;
                    }

                    //var nx = Math.random() * cellRadius * 2;
                    //var ny = Math.random() * cellRadius * 2;


                    //var nx = Math.random() * 10;
                    // var ny = Math.random() * 10;

                    newNodes.push({
                        radius: cellRadius - 2,
                        x: nx,
                        y: ny,
                        splitprob: 1,
                        age: 1,
                        // New cells have similar but slightly different angles to their parents
                        angle: n.angle + (Math.random() - 1) * Math.PI / 3
                    }); 
                }
            });

            nodes = nodes.concat(newNodes); // Add new nodes to existing dataset

            //Scale splitprob based on how far out cells are and their age
            nodes.forEach(function(n) {
                var mag = Math.sqrt(Math.pow(n.x, 2) + Math.pow(n.y, 2));
                n.splitprob = Math.pow(n.age, agePower) * Math.pow(Math.min(mag / furthest, 1), distancePower);
                //console.log(n.splitprob);
                n.age = n.age * agingFactor;
            });
        }
        else {
            // Recalling reset(grow()) once we exceed a certain colony size
            timer.stop();
            growing = false;
        }
        return nodes;
    }

    function resetMedium() {
        resettingMedium = true;
        if (!growing) {
            timer.restart(function() {
                restart(grow());
            }, growthTime);
        }
    }


    $('.constitutive_button').click(function() {
        resetMedium();
    });
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

