var jq = require('jquery');

jq(document).ready(function () {
    'use strict';
    
    var previous = ' ';
    console.log('asdf');

    jq('#image_gallery').click(function(event) {
        var id_name = event.target.id;
        console.log(id_name);
        id_name = id_name.replace(/[0-9]/g, ''); //regex for alphabets, no numbers
        var id_toggle = document.getElementById(id_name); //get ID of names under class 'team-bio'

        if (document.getElementById(id_name)) { //if ID exists
            if ((previous != id_name) && (previous != ' ')) { //if you click a diff image
                var id_previous = document.getElementById(previous);
                jq(id_previous).toggle('hidden');
                console.log(id_previous);

            } else if (previous == id_name) { //clicking on the same image
                jq(id_toggle).toggle('unhidden');
            }
            jq(id_toggle).toggle('unhidden'); //toggles txtbox to appear
            previous = id_name; //checks to see if you clicked different images
        } else {
            alert('This person does not exist. Try again.');
        }
    });

    jq('p').on('click', function(event) {
        console.log('click');
    })
});
