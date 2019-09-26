var json = {
    "members": [{
            "Name": "Vaughan Richard",
            "Location": "  Lagos, Nigeria",
            "imgPath": "img/members/JRBig.jpg",
            "Nickname": "Nickname : JR",
            "DateOfBirth": "Date of : 13th August",
            "Occupation": "Occupation : Politician"
        },

        {
            "Name": "Demola Abdulai",
            "Location": "Copenhagen, Denmark",
            "imgPath": "img/members/DemmyBing-min.jpg",
            "Nickname": "Nickname : Demmy",
            "DateOfBirth": "Date of : 13th August",
            "Occupation": "Occupation : IT Developer"
        },
    ]

};

var news = document.getElementById("news-story");
var members = json.members;
for (var i = 0; i < members.length; i++) {
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
    spanName.innerHTML = members[i].Name;

    var strongTag = document.createElement('strong')
    h2.appendChild(strongTag);

    var awesomeLocation = document.createElement('i')
    awesomeLocation.className = "fas fa-street-view";
    strongTag.appendChild(awesomeLocation);

    var citeTag = document.createElement('cite')
    strongTag.appendChild(citeTag)
    citeTag.innerHTML = members[i].Location

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
    imgMain.src = members[i].imgPath;

    var description = document.createElement('div')
    description.className = 'mc-description';
    contentHeader.appendChild(description);

    var nickName = document.createElement('h6')
    description.appendChild(nickName);
    nickName.innerHTML = members[i].Nickname;

    var birthday = document.createElement('h6')
    description.appendChild(birthday);
    birthday.innerHTML = members[i].DateOfBirth;

    var occupation = document.createElement('h6')
    description.appendChild(occupation);
    occupation.innerHTML = members[i].Occupation;


    // action button to turn the other side 
    var actionBtn = document.createElement('a');
    actionBtn.className = 'mc-btn-action';
    articleTag.appendChild(actionBtn);

    var bars = document.createElement('i');
    bars.className = 'fa fa-bars';
    actionBtn.appendChild(bars)

    // the social media logos on the member footer 
    var mediaFooter = document.createElement('div')
    mediaFooter.className = 'mc-footer'
    articleTag.appendChild(mediaFooter);

    var faceBookIcon = document.createElement('a');
    faceBookIcon.className = 'fab fa-facebook';
    mediaFooter.appendChild(faceBookIcon);

    var twitterIcon = document.createElement('a');
    twitterIcon.className = 'fab fa-twitter';
    mediaFooter.appendChild(twitterIcon);

    var linkedInIcon = document.createElement('a');
    linkedInIcon.className = 'fab fa-linkedin';
    mediaFooter.appendChild(linkedInIcon);

















}