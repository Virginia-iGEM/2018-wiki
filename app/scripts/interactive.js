/**
 * @author Dylan Culfogienis
 * @email dtc9bb@virginia.edu
 * @date 9/17/2018
 * @file interactive.js
 * @brief Javascript for interactive cell simulation. Heavily inspired by
 * Luca Spardella's D3 Game of Life implementation.
 */

var d3 = require('d3');
//var jz = require('jeezy');

$(document).ajaxStop(function() {
    // Set interactive height to be equal to the width
    $('.petri').css('height', $('.petri').css('width'));

    // Grab our <div> container
    var container = d3.select('.petri');
    var dim = parseInt(container.style('width'));

    var cellRadius = 14; // Global of cells in pixels

    var nodes = [{radius: cellRadius, splitprob: 1, age: 1}]; // Start with just one cell
    
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
    d3.interval(function() {
        restart(grow());
    }, 1000);

    var color = d3.scaleSequential(d3.interpolateLab("white", "steelblue"))
        .domain([0, 1]);

    function restart(nodes) {
        // transition
        var t = d3.transition()
            .duration(750);

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
            .style('fill', function(d) {return color(d.splitprob);})
            .attr('r', function(d) {return d.radius - 2;});

        // FUCK
        
        // Transition new nodes
        node = node.enter().append('circle')
            .style('fill', function(d) {return color(d.splitprob);})
            .attr('r', function(d) {return d.radius - 4;})
            .merge(node);

        simulation.nodes(nodes);
    }

    // Required to update displayed position of nodes with force simulation
    function ticked() {
        node.attr('cx', function(d) {return d.x;})
            .attr('cy', function(d) {return d.y;});
    }

    var furthest = 0;

    function grow() {
        if (nodes.length < 300) {
            var newNodes = [];
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

                    newNodes.push({radius: cellRadius - 2, x: nx, y: ny, splitprob: 1, age: 1});
                }
            });

            nodes = nodes.concat(newNodes);

            //Scale splitprob based on how far out cells are
            nodes.forEach(function(n) {
                var mag = Math.sqrt(Math.pow(n.x, 2) + Math.pow(n.y, 2));
                n.splitprob = Math.pow(n.age * Math.min(mag / furthest, 1), 1);
                //console.log(n.splitprob);
                n = n.age * 0.9;
            });
        }
        return nodes;
    }
});

/*
$(document).ajaxStop(function() {
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    var width = 300,
        height = 300;

    var nodes = randomizeData();

    var simulation = d3.forceSimulation(nodes)
        .force("charge", d3.forceManyBody().strength(-150))
        .force("forceX", d3.forceX().strength(.1))
        .force("forceY", d3.forceY().strength(.1))
        .force("center", d3.forceCenter())
        .alphaTarget(1)
        .on("tick", ticked);

    var svg = d3.select(".petri").append("svg").attr("width", width).attr("height", height),
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"),
    node = g.append("g").attr("stroke", "#fff").attr("stroke-width", 1.5).selectAll(".node");

    d3.interval(function(){
        restart(randomizeData());
    }, 2000);

    function restart(nodes) {

        // transition
        var t = d3.transition()
            .duration(750);

        // Apply the general update pattern to the nodes.
        node = node.data(nodes, function(d) { return d.name;});

        node.exit()
            .style("fill", "#b26745")
            .transition(t)
            .attr("r", 1e-6)
            .remove();

        node
            .transition(t)
            .style("fill", "#3a403d")
            .attr("r", function(d){ return d.size; });

        node = node.enter().append("circle")
            .style("fill", "#45b29d")
            .attr("r", function(d){ return d.size; })
            .merge(node);

        // Update and restart the simulation.
        simulation.nodes(nodes)
            .force("collide", d3.forceCollide().strength(1).radius(function(d){ return d.size + 10; }).iterations(1));

    }

    function ticked() {
        node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

    }

    function randomizeData(){
        var d0 = jz.arr.shuffle(alphabet),
            d1 = [],
            d2 = [];
        for (var i = 0; i < jz.num.randBetween(1, alphabet.length); i++){
            d1.push(d0[i]);
        }
        d1.forEach(function(d){
            d2.push({name: d, size: jz.num.randBetween(0, 50)});
        });
        return d2;
    }
    */
    /*
    $('.petri').css('height', $('.petri').css('width'));

    var interactive = d3.select(".petri");

    var dim = Math.min(parseInt(interactive.style('width')), parseInt(interactive.style('height')));
    var petri = interactive
        .append("svg:svg")
        .attr("width", dim)
        .attr("height", dim);

    var nodes_data = d3.range(100).map(function(i) {
        return {index: i, radius: 10};
    });
    //set up the simulation 
    //nodes only for now 
    var simulation = d3.forceSimulation()
        .nodes(nodes_data);

    //add forces
    //we're going to add a charge to each node 
    //also going to add a centering force
    simulation
        //.gravity(0.05)
        .force("charge_force", d3.forceManyBody().strength(2).distanceMax(dim/4))
        .force("collision", d3.forceCollide(function(d) {return d.radius + 2;}))
        .force("center_force", d3.forceCenter(dim / 2, dim / 2));

    

    var cells = petri.append("g")
        .attr("class", "nodes");

    //draw circles for the nodes 
    var node = cells
        .selectAll("circle")
        .data(nodes_data)
        .enter()
        .append("circle")
        .attr("r", function(d) {return d.radius;});
        //.attr("fill", "red");
        //.call(drag(simulation));

    simulation.on("tick", tickActions );

    var splitprob = 0.05;
    var splitting = true;

    function tickActions() {
        //update circle positions each tick of the simulation 
        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    }
});
*/


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

