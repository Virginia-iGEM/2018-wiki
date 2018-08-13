window.onload = function() {
    console.log("bliegh");
    var toc = "";
    var level = 0;

    document.getElementById("main-content").innerHTML =
        document.getElementById("main-content").innerHTML.replace(
            /<h([\d]) id="(.+)">([^<]+)<\/h([\d])>/gi,
            function (str, openLevel, id, titleText, closeLevel) {

                if (openLevel != closeLevel) {
                    return str;
                }
                
                if (openLevel > level) {
                    toc += (new Array(openLevel - level + 1)).join("<ul>");
                }
                else if (openLevel < level) {
                    toc += (new Array(level - openLevel + 1)).join("</ul>");
                }

                level = parseInt(openLevel);

                toc += "<li><a href=\"#" + id + "\">" + titleText
                    + "</a></li>";

                return str;
            }
        );

    if (level) {
        toc += (new Array(level +1)).join("</ul>");
    }

    console.log(toc);

    document.getElementById("toc").innerHTML += toc;

    console.log("done!");
};
