var json = {
    "items": [{
            "Name": "Vaughan Richard",
            "Location": "  Lagos, Nigeria",
            "imgPath": "img/members/JRBig.jpg",
            "Nickname": "JR",
            "Date of Birth": "13th August",
            "Occupation": "Politician"
        },

        {
            "Name": "Demola Abdulai",
            "Location": "Copenhagen, Denmark",
            "imgPath": "img/members/DemmyBing-min.jpg",
            "Nickname": "Demmy",
            "Date of Birth": "13th August",
            "Occupation": "IT Developer"
        },
    ]

};

var news = document.getElementById("news-story");
var items = json.items;
for (var i = 0; i < items.length; i++) {
    var firstDiv = document.createElement('div');
    firstDiv.className = "col-md-4 col-sm-6 col-xs-12";
    news.appendChild(firstDiv);

    var articleTag = document.createElement('article');
    articleTag.className = "material-card Red";
    firstDiv.appendChild(articleTag)

    var h2 = document.createElement('h2');
    articleTag.appendChild(h2)

    var spanName = document.createElement('span')
    spanName.className = 'memberName';
    h2.appendChild(spanName);
    spanName.innerHTML = items[i].Name;

    var strongTag = document.createElement('strong')
    h2.appendChild(strongTag);

    var awesomeLocation = document.createElement('i')
    awesomeLocation.className = "fas fa-street-view";
    strongTag.appendChild(awesomeLocation);

    var citeTag = document.createElement('cite')
    strongTag.appendChild(citeTag)
    citeTag.innerHTML = items[i].Location

    // content header 
    var contentHeader = document.createElement('div')
    contentHeader.className = 'mc-content';
    articleTag.appendChild(contentHeader);

    var imageContainerDiv = document.createElement('div');
    imageContainerDiv.className = 'img-container';
    contentHeader.appendChild(imageContainerDiv);

    var imgMain = document.createElement('img');
    imgMain.className = 'img-responsive';
    imageContainerDiv.appendChild(imgMain);
    imgMain.src = items[i].imgPath;

















    // news.appendChild(firstName);
    // var place = document.createElement('p');
    // place.innerHTML = items[i].Location;
    // news.appendChild(place)
}