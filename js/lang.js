var langs = ['es', 'en'];
var langCode = 'es';
var langJS = null;


var translate = function (jsdata)
{
    $("[tkey]").each(function (index)
    {
        var strTr = jsdata [$(this).attr('tkey')];
        $(this).html(strTr);
    });
}



if (langCode === 'en')
    $.getJSON('lang/en.json', translate);
else
    $.getJSON('lang/es.json', translate);



/*if (langCode in langs)
 $.getJSON('lang/'+langCode+'.json', translate);
 else
 $.getJSON('lang/es.json', translate);*/

var setLang = function (lang) {
    langCode = lang;
    if (langCode === 'en') {
        $.getJSON('lang/en.json', translate);
        $.getJSON('lang/cv-en.json', setCV);
    } else if (langCode === 'es') {
        $.getJSON('lang/es.json', translate);
        $.getJSON('lang/cv-es.json', setCV);
    }


};



