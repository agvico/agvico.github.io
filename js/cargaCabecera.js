var clearChilds = function(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

var setCV = function(data) {
    "use strict";
    
  
    var talks = data.talks;
    var ref = data.revisor;
    var education = data.education;
    var work = data.work;
    var prizes = data.prizes;
     
    // process talks
    var talksDocument = document.getElementById("charlas");
    var refereeDocument = document.getElementById("revisor");
    var educationDocument = document.getElementById("educacion");
    var workDocument = document.getElementById("work");
    var prizesDocument = document.getElementById("prizes");
    
    clearChilds(talksDocument);
    clearChilds(refereeDocument);
    clearChilds(educationDocument);
    clearChilds(workDocument);
    clearChilds(prizesDocument);
   
    
    // charlas
    talks.forEach(elem => {
        var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "row item");
        
        var dataDiv = document.createElement("div");
        dataDiv.setAttribute("class", "twelve columns");
        
        // Get talk name
        var nameElement = document.createElement("h3");
        var nameElementText = document.createTextNode(elem.name);
        
        //  get talk venue
        var venueElement = document.createElement("p");
        venueElement.setAttribute("class", "info");
        var venueElementText = document.createTextNode(elem.venue );
        venueElement.appendChild(venueElementText);
        // bullet
        var bullet = document.createElement("span");
        var bulletText = document.createTextNode("\u2022");
        bullet.appendChild(bulletText);
        venueElement.appendChild(bullet);
        
         
        // get date
        var bullElement = document.createElement("em");
        bullElement.setAttribute("class", "date");
        var bullElementText = document.createTextNode(elem.date);
        bullElement.appendChild(bullElementText);
        venueElement.appendChild(bullElement);
        
        // Append everythin
        nameElement.appendChild(nameElementText);
        dataDiv.appendChild(nameElement);
        dataDiv.appendChild(venueElement);
        mainDiv.appendChild(dataDiv);
        talksDocument.appendChild(mainDiv);
    });
    
    // Revisor en revistas
    ref.forEach(elem => {
        var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "row item");
        
        var dataDiv = document.createElement("div");
        dataDiv.setAttribute("class", "twelve columns");
        
        
        var nameElement = document.createElement("h3");
        var nameElementText = document.createTextNode(elem);
        
        // append all
        nameElement.appendChild(nameElementText);
        dataDiv.appendChild(nameElement);
        mainDiv.appendChild(dataDiv);
        refereeDocument.appendChild(mainDiv);
    })
    
    // Educacion
    education.forEach(elem => {
        var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "row item");
        
        var dataDiv = document.createElement("div");
        dataDiv.setAttribute("class", "twelve columns");
        
        // Get talk name
        var nameElement = document.createElement("h3");
        var nameElementText = document.createTextNode(elem.title);
        
        var subtitleElement = null;
        var prizeElement = null;
        var prizeElementText = null;
        if(elem.hasOwnProperty("subtitle")){
            subtitleElement = document.createElement("h5");
            var subtitleElementText = document.createTextNode(elem.subtitle);
            subtitleElement.appendChild(subtitleElementText);
        }
        if(elem.hasOwnProperty("prize")){
            prizeElement = document.createElement("i");
            prizeElement.setAttribute("class", "fa fa-trophy");
            prizeElement.setAttribute("style", "margin-right: 1rem; font-size: x-large");
            prizeElementText = document.createTextNode(elem.prize);
            //prizeElement.appendChild(prizeElementText);
        }
        
        //  get talk venue
        var venueElement = document.createElement("p");
        venueElement.setAttribute("class", "info");
        var venueElementText = document.createTextNode(elem.venue);
        venueElement.appendChild(venueElementText);
        // bullet
        var bullet = document.createElement("span");
        var bulletText = document.createTextNode("\u2022");
        bullet.appendChild(bulletText);
        venueElement.appendChild(bullet);
        
         
        // get date
        var bullElement = document.createElement("em");
        bullElement.setAttribute("class", "date");
        var bullElementText = document.createTextNode(elem.date);
        bullElement.appendChild(bullElementText);
        venueElement.appendChild(bullElement);
        
        // Append everythin
        nameElement.appendChild(nameElementText);
        dataDiv.appendChild(nameElement);
        if(subtitleElement !== null) dataDiv.appendChild(subtitleElement);
        dataDiv.appendChild(venueElement);
        if(prizeElement !== null) dataDiv.appendChild(prizeElement);
        if(prizeElementText !== null) dataDiv.appendChild(prizeElementText);
        mainDiv.appendChild(dataDiv);
        educationDocument.appendChild(mainDiv);
    });
    
    
    work.forEach(elem => {
         var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "row item");
        
        var dataDiv = document.createElement("div");
        dataDiv.setAttribute("class", "twelve columns");
        
        // Get talk name
        var nameElement = document.createElement("h3");
        var nameElementText = document.createTextNode(elem.position);
        
        //  get talk venue
        var venueElement = document.createElement("p");
        venueElement.setAttribute("class", "info");
        var venueElementText = document.createTextNode(elem.firm );
        venueElement.appendChild(venueElementText);
        // bullet
        var bullet = document.createElement("span");
        var bulletText = document.createTextNode("\u2022");
        bullet.appendChild(bulletText);
        venueElement.appendChild(bullet);
        
         
        // get date
        var bullElement = document.createElement("em");
        bullElement.setAttribute("class", "date");
        var bullElementText = document.createTextNode(elem.date.from + " - " + elem.date.to);
        bullElement.appendChild(bullElementText);
        venueElement.appendChild(bullElement);
        
        var descriptionElement = document.createElement("p");
        var descriptionElementText = document.createTextNode(elem.description);
        descriptionElement.appendChild(descriptionElementText);
        
        // Append everything
        nameElement.appendChild(nameElementText);
        dataDiv.appendChild(nameElement);
        dataDiv.appendChild(venueElement);
        dataDiv.appendChild(descriptionElement);
        mainDiv.appendChild(dataDiv);
        workDocument.appendChild(mainDiv);
    });
    
    prizes.forEach(elem => {
         var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "row item");
        
        var dataDiv = document.createElement("div");
        dataDiv.setAttribute("class", "twelve columns");
        
        // Get talk name
        var nameElement = document.createElement("h3");
        var nameElementText = document.createTextNode(elem.name);
        
        //  get talk venue
        var venueElement = document.createElement("p");
        venueElement.setAttribute("class", "info");
        var venueElementText = document.createTextNode(elem.description );
        venueElement.appendChild(venueElementText);
        // bullet
        var bullet = document.createElement("span");
        var bulletText = document.createTextNode("\u2022");
        bullet.appendChild(bulletText);
        venueElement.appendChild(bullet);
        
         
        // get date
        var bullElement = document.createElement("em");
        bullElement.setAttribute("class", "date");
        var bullElementText = document.createTextNode(elem.date);
        bullElement.appendChild(bullElementText);
        venueElement.appendChild(bullElement);
        
        // Append everythin
        nameElement.appendChild(nameElementText);
        dataDiv.appendChild(nameElement);
        dataDiv.appendChild(venueElement);
        mainDiv.appendChild(dataDiv);
        prizesDocument.appendChild(mainDiv);
    });
    
    var content = data.cabecera;
    var list = document.getElementById("cabecera");
    

};

if(navigator.language.startsWith("es"))
    setLang('es');
else
    setLang('en');