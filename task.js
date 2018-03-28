
//-------------MAIN-------------------------
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://www.json-generator.com/api/json/get/cqHzMtkErS?indent=2');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
}
ourRequest.send();

//-------------FUNCTIONS--------------------

function renderHTML(data) {
  var article = document.getElementById("article");

  var htmlString;


  for(i = 0; i < data.data.friends.length; i++) {
    var template =
    "<hr>" +
    "<div class='flexbox_user'><img src='profile.svg' id='profile'>" +
    "<div class='flexbox_user_name'>$friendName</div>" +
    "<div class='flexbox_user_gender_age'>$gender, $age</div>" +
    "<div class='flexbox_user_details_button'>" +
    "<input type='image' src='view-more.svg' id='view-more'" + i ">" +
    "</div>" +
    "</div>" +
    "<div class='flexbox_user_relationship hide' id='details'>$relationship</div>" ;
    var htmlString_relationship = '';

    for(ii = 0; ii < data.data.friends[i].friends.length; ii++){
      htmlString_relationship =
      '\"' +
      data.data.friends[i].friends[ii].relationship +
      '\", ' ;
      // if(htmlString_relationship == '\"\"\,'){
      //   htmlString_relationship = 'none';
      // }
    }

    htmlString += template
    .replace('$friendName', data.data.friends[i].name)
    .replace('$gender', data.data.friends[i].gender)
    .replace('$age', data.data.friends[i].age)
    .replace('$relationship', htmlString_relationship);
  }

  console.log(article, htmlString);
  article.innerHTML = htmlString;

  for(i = 0; i < data.data.friends.length; i++){
  button.addEventListener('click', function() {
    var button = document.getElementById("view-more" + i);
    if (document.getElementById('details').style.display == 'block') {
      document.getElementById('details').style.display = 'none';
    }
    else {
      document.getElementById('details').style.display = 'block';
    }

  });
  }
}
