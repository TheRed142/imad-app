//counter code
var button = document.getElementById('counter');

button.onclick = function() {
   
     //make a request to the counter end point
  var request = new XMLHttpRequest();
  
  //capture the respond and store it in a variable
    request.onreadystatechange = function () {
    if(request.readyState === XMLHttpRequest.DONE) {
    //take some action
    if (request.status === 200) {
      var counter = request.responseText;
      var span = document.getElementById('count');
      span.innerHTML = counter.toString();
    }
    }
    
    //not done yet
  };
  //make the request
  request.open('GET','http://likh17is.imad.hasura-app.io/counter', true);
  request.send(null);
};

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
  //make a request to the server and send the name
  
  //capture a list of names and render it as a list
  var names = ['name1','name2','name3','name4'];
  var list = '';
  for (var i=0; i<names.length; i++) {
      list += '<li>'+names[i]+'</li>'; 
  }
  var ul = documenr.getElelementById('namelist');
  ul.innerHTML = list;
  
};