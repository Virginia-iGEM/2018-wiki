$(document).ajaxStop(function () {
    'use strict';
    
    var previous = 'Ngozi';

    $(document).on('click', '#image_gallery', function(event) {
        var id_name = event.target.id;
        console.log(id_name);
        id_name = id_name.replace(/[0-9]/g, ''); //regex for alphabets, no numbers
        var id_toggle = document.getElementById(id_name); //get ID of names under class 'team-bio'

        if (document.getElementById(id_name) && id_name != "image_gallery") { //if ID exists and accounting for white space
            if ((previous != id_name)) { //if you click a diff image
                var id_previous = document.getElementById(previous);
                //Changes the class so that it acts as a "toggle switch"
                $(id_previous).removeClass('unhidden');
                $(id_previous).addClass('hidden');
                //$(id_previous).toggleClass('hidden');
                //console.log(id_previous);
            } 
            else if (previous == id_name) { //clicking on the same image
                $(id_previous).removeClass('hidden');                
                $(id_previous).addClass('unhidden');
                //$(id_toggle).toggleClass('unhidden');
            }
            $(id_toggle).removeClass('hidden');
            $(id_toggle).addClass('unhidden');
            //$(id_toggle).toggleClass('unhidden'); //show bio
            previous = id_name; //checks to see if you clicked different images
        } 
        else {
            $(previous).toggleClass('unhidden');
        }
    });
});
