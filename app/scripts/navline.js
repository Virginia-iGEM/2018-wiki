var sitemap = {
    '': 'project',
    
    'Overview_Project': 'project',
    'Description': 'project',
    'Design': 'project',
    'Experiments': 'project',
    'Notebook': 'project',
    'InterLab': 'project',
    'Model': 'project',
    'Results': 'project',
    'Demonstrate': 'project',
    'Improve': 'project',

    'Parts': 'parts',
    'Basic_Part': 'parts',
    'Composite_Part': 'parts',
    'Part_Collection': 'parts',

    'Safety': 'safety',

    'Overview_HP': 'hp',
    'Human_Practices': 'hp',
    'Public_Engagement': 'hp',

    'Team': 'team',
    'Collaborations': 'team',
    'Attributions': 'team',

    'Applied_Design': 'awards',
    'Entrepreneurship': 'awards',
    'Hardware': 'awards',
    'Measurement': 'awards',
    'Model': 'awards',
    'Software': 'awards'
}
$(document).ready(function() {
    var curnavitem = window.location.href;
    if(curnavitem.match(/igem\.org/i)) { // We know we're live
        curnavitem = curnavitem.replace(/(http:\/\/)?\d{4}\.igem\.org\.Team:\w+\/?/i, '');
    }
    else {
        curnavitem = curnavitem.replace(/(http:\/\/)?localhost:\d+\/?/, '');
        curnavitem = curnavitem.replace(/\.html/i, '');
    }
    console.log(curnavitem);
    $('.' + sitemap[curnavitem]).addClass('current');
})