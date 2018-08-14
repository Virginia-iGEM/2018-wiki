// Code courtesy of Ates Goral
// https://stackoverflow.com/a/187946

var updatetoc = function() {
    var smallestoffset = -$(document).height();
    var smallestheader;

    $('article h1').each(function(i) { 
        var offset = $(this).position().top - $(document).scrollTop() - Math.max(document.documentElement.clientHeight, window.innerHeight || 0)/4; // Negative offset values indicate the header's top has passed 1/4 of the way down the viewport
        //console.log($(this).text() + ' ' + offset);
        if (offset > smallestoffset && offset <= 0) {
            smallestoffset = offset;
            smallestheader = $(this);
        }
    });

    if (smallestheader === undefined) {
        smallestheader = $('article h1:first');
    }

    //console.log(smallestheader.text());

    $('#toc>ul>li').each(function(i) {
        //console.log($(this).children('a').attr('href'));
        //console.log('#' + smallestheader.attr('id'));
        if ($(this).children('a').attr('href') === '#' + smallestheader.attr('id')) {
            $(this).children('ul').addClass('current');
        }
        else {
            $(this).children('ul').removeClass('current');
        }
    });
    //console.log($(document).scrollTop());
};

window.onload = function() {
    var toc = "";
    var level = 0;

    document.getElementById("main-content").innerHTML =
        document.getElementById("main-content").innerHTML.replace(
            /<h([\d]) id="(.+)">([^<]+)<\/h([\d])>/gi,
            function (str, openLevel, id, titleText, closeLevel) {
                
                if (openLevel > level) {
                    toc += (new Array(openLevel - level + 1)).join("<ul>");
                }
                else if (openLevel < level) {
                    toc += (new Array(level - openLevel + 1)).join("</ul>");
                }

                toc += "</li>";

                level = parseInt(openLevel);

                toc += "<li><a href=\"#" + id + "\">" + titleText
                    + "</a>";

                return str;
            }
        );

    if (level) {
        toc += (new Array(level +1)).join("</ul>");
    }

    document.getElementById("toc").innerHTML += toc;

    updatetoc();
};

window.onscroll = updatetoc;
