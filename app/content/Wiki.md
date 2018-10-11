# Wiki Collaboration

## Intro

While developing our wiki, we realized that the media wiki template could be improved upon, as editing was slow and inefficient. We began to think of ways to develop a tool that would make editing our wiki faster and more efficient; thus, the Wiki Build Tool was born. We shared our tool with other teams and began to develop a code base that could be shared and improved upon by the current iGEM community and future iGEM teams. 

## Wiki Build Tool

We wanted to make a tool that would make editing the wiki fast and relatively painless. Our tool automates the uploading of content (HTML, CSS, JS, images, and fonts) to the iGEM wiki with some add ons. With a local version of your wiki on your desktop, you can make changes to your files and immediately see the changes on your browser. We proposed our idea at the [Mid-Atlantic Meetup](http://2018.igem.org/Team:UMaryland/meetup) and many teams were interested in our tool. From the positive reception we received, we decided to continue development of our tool so that it could be used by the iGEM community. After posting on the Collaborations page, we received many emails from teams wanting to use and improve upon our tool, which we were extremely excited about! 

## Webscraper

While the Collaborations page is a great place to start to look for collaborations, we quickly realized that we had difficulty finding other teams whose projects were similar to ours. We made a webscraper that could easily pull information from all 2018 iGEM teams wikis and then find a similar project based on user-inputted keywords. To make it more iGEM-friendly, we also made a GUI for the webscraper, allowing teams to quickly search up information they were looking for. 

## Tutorials

Since iGEM is mainly focused on synthetic biology, we realized that many teams may not have a computer science background, making it difficult to edit and style the wiki in the desired manner. We created several detailed tutorials that cover the basics of coding in the terminal, using the Wiki Build Tool, and using the webscraper.   

## Teams

We would like to thank all the teams who expressed interest in using our tool and helped contribute to the codebase!

**University of Toronto**, who built the igemwiki-api and the original generator.  
**University of Pittsburgh** 
**William and Mary** 
**Georgia State University**  
**Richard Montgomery High School**  
**BiolQS Barcelona**, who featured our Wiki Build Tool in their wiki video tutorials.   
**CPU_China**  
**ICT_Mumbai**  
**Columbia University**, who helped contribute to our codebase.  
**OUCiGEM**   
**Vienna** (University of Natural Resources and Life Sciences)  


## External Resources

All these tutorials and tools can be found directly on our GitHub page:   
[Wiki Build Tool](https://github.com/Virginia-iGEM/igem-wikibrick)    
[Wiki Build Tool Tutorial](https://github.com/Virginia-iGEM/igem-wikibrick/tree/master/docs/tutorial)  
[Yeoman Generator](https://github.com/Virginia-iGEM/generator-igemwiki) - creates a template of the wiki instead of starting from scratch.  
[Webscraper](https://github.com/Virginia-iGEM/igem-wikiscraper)     
[Command Line Tutorial](https://github.com/Virginia-iGEM/2018-tutorials/tree/master/cli)  

# Open Letter on the State of the iGEM Wiki

In the process of building all of our tools and establishing our collaborations, we've come to the conclusion that the iGEM Wiki could benefit from some changes to the way it is set up. We believe that MediaWiki is no longer an appropriate tool, both for team Wikis and for the Repository.

## Motivation

The purpose of MediaWiki is to create a series of interlinked encyclopedic pages with a single, holistic style to them, as it is used on Wikipedia. Every single one of the millions of Wikipedia pages in existence has the exact same appearance, almost the exact same structure, and a very rigid set of guidelines that contributors must follow. This is suited for Wikipedia because a Wikipedia page does not need to differentiate itself - it is valuable purely on the merits of its content.

As iGEM has evolved, the award for Best Wiki has appeared, and so team Wikis have become more and more elaborate. This can be a good thing; it means teams get a chance to differentiate themselves, and frequently come up with unique and creative ways to represent the complex and often abstract concepts of synthetic biology, and end up contributing not only their parts and their data, but also potentially new ways of visualizing that information.

However, it can also be a bad thing; small teams are disadvantaged because a single team member must commit a lot of effort to modifying the style of their team's Wiki, potentially adding both complex CSS and JavaScript in a nonstandard way (no modern websites use `<style>` and `<script>` tags to include CSS and JavaScript). Styling the iGEM Wiki can require nonobvious modifications due to the presence of styling that is loaded on every page through a php file (`load.php`), which must be overridden with `!important` tags, which were never meant to be used in production, as there is no way to disable `load.php`.

Regardless of whether the competitive of Wiki development is a good thing or a bad thing, one thing is clear - the pages that teams are creating nowadays are not Wikis. They are small websites - running on a common server, but websites nevertheless. They have their own unique style, every one is navigated in a slightly different manner, many tell stories in wholly different ways than others. The [iGEM Team Wiki of 2007](http://2007.igem.org/wiki/index.php/Virginia) is wildly different from the [iGEM Team Wiki of 2018](http://2018.igem.org/Team:Virginia). The framework iGEM uses should support this changed purpose - the creation of a website, as opposed to a series of Wiki pages.

The MediaWiki framework, while it supports all of these things, does not do it well. Image uploads must be done one at a time, which is fine for a wiki page which might have a few images - but many teams nowadays will feature 10 or more images per page, often in the form of logos or icons. Relative internal URLs do not work, and so absolute URLs must be used - a topic that will be readdressed below in the security section. Lastly, the in-browser text editor is fine for simple MediaWiki notation, but even a simple text editor like Notepad++ or Atom would at least provide syntax checking and highlighting, which would help teams of all technical aptitudes.

This year, our team developed the tools mentioned above so that we'd be able to work with the MediaWiki framework in a way that supports a very modern web development framework, but development of this tool took almost as much time as creating the Wiki itself - perhaps more. Our purpose in making this tool was to get around problems with the MediaWiki editing tools - single image uploading, maintainability in the event that a piece of code breaks, incorporation of JavaScript libraries such as D3, which we used to build our homepage. And, even then, our tool, while very useful, is ultimately a very fancy hack - it isn't a "proper" or "correct" way of interacting with the `igem.org` site. We see no reason that teams should have access to a tool with similar features that is fully supported by iGEM.

### Security

This was a point of confusion for our team - igem.org does not use HTTPS, despite the fact that pages are marked as `prefershttps:1` on line 25 of all pages, and thus signals to browsers that it should use HTTPS.

Later on, we realized that igem.org also asks for a username and password without using HTTPS. While it is discouraged by many sites, many users will duplicate their passwords across sites - including iGEM. This presents a potential security flaw where users' passwords could be harvested by man-in-the-middle or similar attacks due to a lack of encryption.

Considering the content of iGEM and the teams involved, we believe that increased security is another topic of importance when it comes to the fitness of iGEM's current web framework.

A secondary note: JQuery 1.11.1 is still used; the modern stable version of JQuery at the time of writing is 3.3.1. JQuery 1.11.1 has a known cross-site scripting security flaw. There is no reason aside from support of legacy code that JQuery shouldn't be up to date.

### Code Inspection

In the process of building our web scraper, we happened across many award-winning teams who in have, in the past few years, used CDNs, which are explicitly disallowed by Rule 4 of the Wiki deliverable.

This has lead us to believe that the code teams' submit is not inspected; while this can obviously lead to violations of the competition rules, it is another security concern, as there is nothing preventing a team from consciously or accidentally uploading malignant code to their Wiki.

### Consistency in the Registry

If the MediaWiki framework has proven too restrictive for team Wikis, it is perhaps too loose for the Registry. This is an opinion, more than anything - that many parts in the Registry lack consistent or sufficient documentation, on account of a lack of common styling, or a common styleguide to be followed. This can make it unclear what a part actually does, and dilutes the quality of information found on the Registry.

## Proposal

It wouldn't be very much in the engineering spirit to list off a bunch of problems and provide no solution. So, here are our proposed changes:

1. Separate future igem.org server instances from past ones. This allows old igem wikis to be retained and accessible without holding back the development of tools to support new ones. 
2. Switch to HTTPS. If nothing else, this is the most important item on this list. At least for future years, where team members will be actively entering their passwords and usernames. While links to content from previous years will trigger a mixed content warning on modern web browsers, as long as the content is passive (as defined [here](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content#Mixed_passivedisplay_content)), the page will still be properly served. Some HTTPS is still better than no HTTPS at all.
3. Replace MediaWiki with a tool similar to GitHub Pages. iGEM has already shown a preference for GitHub in the past, and there is no reason that a similar service could not be used. GitHub pages is a serviced offered by GitHub where a website can be hosted directly out of a GitHub repository. 
  - Version control is built-in, because Git is version control software.
  - iGEM sites could be run locally without any worry as to whether or not they will appear differently on the igem.org host.
  - Uploading of HTML, CSS, JS, images, videos, fonts, and other files is unified under one common interface.
  - This would benefit less technically inclined teams by providing a more modern web interface, in addition to supporting site templating tools such as [Jekyll](https://jekyllrb.com/) and [Yeoman](http://yeoman.io/), providing teams the opportunity to create sites that are more there own with less technical overhead. These teams could be further supported by modern WYSIWYG JavaScript editors such as [quill.js](https://quilljs.com/), enabling them to edit their wiki as they would a Word document, with the benefits of version control transparently built in.
  - This will benefit more technically inclined teams by providing direct Git integration, a tool which many teams use anyways to manage their code, simplifying workflow by cutting out as many extraneous tools as possible.
  - Lastly, this would benefit the iGEM organization and competition by providing an opportunity to use a modern version control tool that makes inspection of teams' code easier, making it easier to enforce competition rules and for future teams to reuse past teams' code.
4. Enforce a common style for biobricks submitted to the Registry, either through some form or template. We do not believe that the Registry would be as well served by a new framework, due to it being used more like a traditional Wiki.
5. A service such as Amazon AWS could be useful for handling load during peak hours, particularly directly before the Wiki freeze when the servers become less reliable.

This solution is neither perfect nor without flaws, simply the one we came up with after developing our toolkit and becoming acquainted with the way igem.org and the Registry are set up.

The point of this letter is to open discussion on the topic. We believe that the igem domain should reflect the ambition of the teams involved in contributing to it and the importance of synthetic biology as a field, and so we'd like to see it be the best it can be for future teams.
