$(document).ready(function() {
  
  add_peeps(100, 'my name is Manisha');
  display_users();
  display_peeps();
});

function display_users(){
  $.ajax({
    url: "https://chitter-backend-api.herokuapp.com/users",
    type: 'GET',
    data: {
      key: 'value',
    },

  success: function(users) {
  for (var i = 0; i <= users.length; i++) {
    $('.users').append("ID is: "+ users[i].id + "<br>");
    $('.users').append("Username is: "+users[i].handle + "<br>");
    }
  }
 });
}

function display_peeps(){
  $.ajax({
    url: "https://chitter-backend-api.herokuapp.com/peeps",
    type: 'GET',
    data: {
      key: 'value',
  },
  
  success: function(peeps) {
    for (var i = 0; i <= peeps.length; i++) {
    $('.peeps').append("peep ID is: "+ peeps[i].id + "<br>");
    $('.peeps').append("Peep name is: "+peeps[i].body + "<br>");
    }
   }
  });

}

function add_peeps(id, body){
  $.ajax({
    type: 'POST',
    url: "https://chitter-backend-api.herokuapp.com/peeps",
    data: {'id': 'id','body': 'body'},
    success: function(data) { alert('data: ' + data);
    contentType: 'application/json'
    dataType: 'json'
    }
  });
}