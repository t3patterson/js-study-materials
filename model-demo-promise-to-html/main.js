console.log('hey')

var single_container_el = document.querySelector('#single-user-demo')
var multi_container_el = document.querySelector('#multi-users-demo')

//Render out single users
$.getJSON("https://randomuser.me/api/?nat=us").then(function(d){

    var u = d.results[0].user

    html_Str = '';

    html_Str += '<div class="user-card">'
    html_Str +=   '<img src="'+u.picture.medium+'"' +'>'
    html_Str +=   '<h3>'+ u.name.first + " " + u.name.last + '</h3>'
    html_Str +=   '<p class="location">'+u.location.city+', ' + u.location.state + '</p>'
    html_Str +=   '<p class="email">'+u.email+'</p>'
    html_Str +=  '</div>'

    single_container_el.innerHTML += html_Str

})


//Render out multiple users
$.getJSON("https://randomuser.me/api/?results=20&nat=us").then(function(d){
  for (var i = 0 ; i < d.results.length; i++) {

    var u = d.results[i].user

    html_Str = '';

    html_Str += '<div class="user-card">'
    html_Str +=   '<img src="'+u.picture.medium+'"' +'>'
    html_Str +=   '<h3>'+ u.name.first + " " + u.name.last + '</h3>'
    html_Str +=   '<p class="location">'+u.location.city+', ' + u.location.state + '</p>'
    html_Str +=   '<p class="email">'+u.email+'</p>'
    html_Str +=  '</div>'

    multi_container_el.innerHTML += html_Str

  }
})