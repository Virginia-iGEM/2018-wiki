
$(document).ready(function() {
    $("img").click(function(event) {
        var id_name = event.target.id;
        id_name = id_name.replace(/[0-9]/g, '');
        //alert(id_name);
        var target_name = $(`.${id_name}`).id;
        unhide(id_name);
        }
    );
});

var previous = "";

function unhide(divID) {
	if(divID) {
		divID.className=(divID.className=='hidden')?'unhidden':'hidden';
		previous.className=(previous.className=='hidden')?'unhidden':'hidden';
		previous=divID;
	}
}