$(document).ready(function() {
  loadLogin();
});

$(document).on('click', '#tosignup', function(evt) {
  loadPage('signup');
});

$(document).on('click', '#tologin', function(evt) {
  loadLogin();
});

$(document).on('click', '#signup_button', function(evt) {
  signup();
});

var signup = function() {
  var name = $("#name").val();
  var password = $("#password").val();
  var reenter = $("#reenter").val();
  $.ajax({
    type: "POST",
    url: "/users/",
    data: {
      username: name,
      password: password,
      reenter: reenter,
    },
    success : function( data ) {
      console.log(data);
      res.redirect('/users/' + user + '/profile');
    },
    error : function (err) {
     console.log("Creation failed with error : " + err);
     loadPage('signup', {error:true});
    }
  });
}

var loadPage = function(template, data) {
  data = data || {};
  $('#main-container').html(Handlebars.templates[template](data));
};

var loadLogin = function() {
    loadPage('login');
};