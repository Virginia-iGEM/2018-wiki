# Dev Notes

6/13/2018 For whatever reason, uploading a page with the name 'global' to the iGEM wiki means one cannot retrieve its raw data; I.E. http://2018.igem.org/Template:Virginia/css/global?action=raw&ctype=text/css yields nothing while http://2018.igem.org/Template:Virginia/css/styles?action=raw&ctype=text/css works.

6/14/2018 Idea for a theme: Faulhaber, based on a medical firm I visited in Germany. Single, judicious highlight color with various neutrals. Wireframe drawings extend off the background and onto active elements. Sort of like a physical manifestation of material design, but with some extra flair to give it character.

## Notes for future iGEM teams working on the wiki

A lot of teams will be working on their wiki in the future. In fact, all of them will.

Here's what we've collected from our experience:
- Use a tool to automate uploads. igem-wikibrick is a heavy tool developed by Virginia iGEM that can automate builds and uploads. igemwiki-api is a lighter and more flexible but less automated tool that only deals with uploads. This gives you a clear understanding of what is behaving as it should on your wiki, in addtion to reducing your iteration time to half a second + however long it takes for you to code instead of a few minutes + however it long it takes for you to code. It also makes uploading large numbers of images easy, same goes for fonts. Additionally you can use an IDE or text editor of your choice.
- Don't be afraid to use `!important`. If something appears differently on the `igem.org` than it does on your local build, `!important` all of the relevant CSS properties. Things should look identical; if they don't, you aren't using enough `!important`. Yes, it's not meant for use in production, yes, it results in strange specificity problems and weird looking CSS, but it's necessary to override iGEM's `load.php`. May your font sizes remain consistent and your style be independent of the iGEM template.
- **Don't** accidentally upload your own version of JQuery. `igem.org` automatically loads JQuery 1.11.1; this cannot be turned off. We've built a rule into our tool that prevents it from uploading JQuery to the iGEM wiki. If two different versions of JQuery are present, they can conflict, resulting in unpredictable JavaScript behaviour. Additionally, when installing a local copy of JQuery using Bower or Node to test with, make sure you've installed JQuery 1.11.1 so that you aren't using features that the iGEM wiki's JQuery doesn't have, and so any bugs you encounter can be reproduced locally. If you would like to use a newer version of JQuery, you can do this with Browserify by assigning your JQuery `require` to a symbol other than `$`, such as `jq` or just `q`.
