function relativePositions (selector) {
    // Retrieve all tables in the labjournal
    var entryList = [];
    $(selector).each(function(index) {
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

    var list = $('#va-timeline ul');

    // Add in shortcut entries to timeline
    for (var item in items) {
        console.log(item);
        var date;
        item.obj.text().replace(/\d\d/i, function(x) {
            date = x;
            return x;
        });
        //console.log(testout);
        list.append('<li><a href="#">' + date + '</a></li>');
    }

    var root = $('#va-timeline .progress-container');
    var rootTop = root.position().top;
    var rootHeight = root.height();

    // Hack to put ul at the same position as va-timeline
    var ul = $('#va-timeline ul');
    ul.css('top', rootTop);
    ul.css('left', root.position().left -4.75);

    $('#va-timeline ul li').each(function(index) {
        var item = items[index];

        var pos = rootTop + rootHeight * item.relPos;
        $(this).css('top', 0);

    });
});
