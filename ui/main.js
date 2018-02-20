//counter code
var button = document.getElementById('counter');

button.onclick = function() {
   
   
  //make a request to the counter end point
  var request = new XMLHttpRequest();
  
  //capture the respond and store it in a variable
  
  request.onreadystatechange = function(){
    if(request.readystate === XMLHttpRequest.DONE){
    //take some action
    if(request.status === 200){
      var counter = request.responseText;
    }
    }
    
    //not done yet
  };
  //make the request
  request.open('GET','http:likh17is.imad.hasura-app.io/counter', true)
  request.send(null)
};