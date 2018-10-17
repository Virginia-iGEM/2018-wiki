# Software: Virginia IGEM's Wiki Tools

## Wiki Build Tool

We wanted to make a tool that would make editing the wiki fast and relatively painless. Our tool automates the uploading of content (HTML, CSS, JS, images, and fonts) to the iGEM wiki with some add ons. With a local version of your wiki on your desktop, you can make changes to your files and immediately see the changes on your browser. We proposed our idea at the [Mid-Atlantic Meetup](http://2018.igem.org/Team:UMaryland/meetup) and many teams were interested in our tool. From the positive reception we received, we decided to continue development of our tool so that it could be used by the iGEM community. After posting on the Collaborations page, we received many emails from teams wanting to use and improve upon our tool, which we were extremely excited about!

<figure>
![The offline copy updates almost instantly when modified locally](/images/wiki/tool_demo.gif)
<figcaption>The offline copy updates almost instantly when modified locally</figcaption>
</figure>

Our tool: 
- Serves an offline copy of a teams Wiki that will instantly render any changes the team makes, enabling very quick iteration and testing of team Wikis and reducing load on the iGEM server by intelligently uploading only files that have changed since the last upload.
- Generates wikis from templates. Two templates are currently available; ICT-Mumbai is currently working on a third.
- Performs URL substitution, enabling use of relative URLs. This allows teams to refer to pages by their name; `<year>.igem.org/Team:<teamname>` is automatically prepended to all links that look like relative links. This works for links to other pages, images, certain entries in stylesheets and fonts.
- Automatically upload pages and files. Currently this includes HTML, CSS and JavaScript, several image formats and fonts, and can be quickly extended to other files such as PDFs, webms, zip files, and all other file formats supported by the iGEM wiki by modifying a single line of code, as needed by the team.
- Provides programmable templates, reducing code duplication. These templates can be as simple as adding a navigation menu and footer to every page, or as complex as automatically generating on-hover tooltips from a dictionary of defined words.
- Can automatically upload and import Node.js packages. We used one of these packages (D3.js) to create the animations on our homepage; the package is automatically included as `require`d in JavaScript files, and is uploaded alongside the team's code. Using a separate package manager called Bower, CSS can also be automatically uploaded, enabling the use of Bootstrap and similar frameworks with a simple command: `bower install <package name>`. The package will be included with the next upload.
- Can automatically convert Markdown and Word Documents into HTML (experimental feature)

<figure>
![The offline (localhost) and online (igem.org) copies of our Wiki look nearly identical](/images/wiki/comparison.png)
<figcaption>The offline (localhost) and online (igem.org) copies of our Wiki look nearly identical</figcaption>
</figure>

As one can see on our Collaborations page, we had interest from many teams and even had one (or perhaps more!) 2018 team use our tool to build their wiki!

## Webscraper

While the Collaborations page is a great place to start to look for collaborations, we quickly realized that we had difficulty finding other teams whose projects were similar to ours. We made a webscraper that could easily pull information from all 2018 iGEM teams wikis and then find a similar project based on user-inputted keywords. To make it more iGEM-friendly, we also made a GUI for the webscraper, allowing teams to quickly search up information they were looking for.

We designed this webscraper to be easily modifiable and extendable, with the hopes that future teams will be able to use it to analyze iGEM Teams' Wikis in aggregate. Now, any team can use this tool to turn past, present and future Wikis into treasure troves of data for historical, linguistic and meta-analyses.

### External Resources

All these tutorials and tools can be found directly on our GitHub page:
[Wiki Build Tool](https://github.com/Virginia-iGEM/igem-wikibrick)
[Wiki Build Tool Tutorial](https://github.com/Virginia-iGEM/igem-wikibrick/tree/master/docs/tutorial)
[Yeoman Generator](https://github.com/Virginia-iGEM/generator-igemwiki) - creates a template of the wiki instead of starting from scratch.
[Webscraper](https://github.com/Virginia-iGEM/igem-wikiscraper)
[Command Line Tutorial](https://github.com/Virginia-iGEM/2018-tutorials/tree/master/cli)
