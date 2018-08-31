# WetlabJournalPrep

You should probably write a bash script that does the following:
- Splits WetlabJournal.html into WetlabJournal.hbs and WetlabJournalStyles.hbs, pulling out the `<body>` and `<head>` tags and places them in the `/app/partials` directory.
  - Replace `<body>` tag with `<div class="labjournal Cxx Cyy">`
  - Remove the metadata tag from `<head>`; all we want is the styles
- Moves images to `/app/images/LabJournal/`, overwriting any old stuff.
- Corrects image paths by changing `src="images/imagex.{png,jpg}"` to `src="images/LabJournal/imagex.{png,jpg}"`
  - Use regex `s/src="images/src="\/images\/LabJournal/g`
- Disables use of custom fonts?? Not sure if we should do this or not, it's optional
  - Use regex `s/font-family\(.*\)$/\/\*font-family\1*\//g`
- Makes styling specific to the lab by adding the `.labjournal` class as a parent of all the wetlab styling
  - Use regex `s/^ *\(.*{\)$/.labjournal \1`

All the partials templates are where they should belong. If you don't make a BASH script this all needs to be redone before the wiki freeze.
