
$(document).ready(function() {
    $("img").click(function(event) {
        var id = event.target.id;
        //alert(id);
        var text = document.getElementById(id);
        if(text.style.display == "none"){
        	text.style.display = "block";
        }
        else{
        	text.style.display = "none";
        }
        }
    );
});