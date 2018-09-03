function relativePositions (selector) {
    // Retrieve all tables in the labjournal
    var entryList = [];
    $().each(function(index) {
        entryList.push({obj: $(this)});
    });

    // Top of document
    var startingPosition = 0;
    // Bottom of document
    var endingPosition = $(document).height();
    // Length of document
    var length = endingPosition - startingPosition;

    // Calculate the relative positions of every element in the document
    for (var index in entryList) {
        var entry = entryList[index];
        entry.relPos = ( entry.obj.offset().top - startingPosition ) / length;
    }

    // Return the whole list
    return entryList;
}

$(document).ajaxStop(function() {
    var items = relativePositions('.labjournal table');
});
