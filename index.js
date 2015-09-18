function doXMLHttpRequest() {
  var xhr = new XMLHttpRequest(); 

  xhr.onreadystatechange=function()  {
   if (xhr.readyState==4) {
     if(xhr.status == 200) {
        processResponse(xhr.responseText);
    } else {
      responseArea.innerHTML="Error code " + xhr.status;
    }
   }
  }
  xhr.open("GET", "data.json", true); 
  xhr.send(null); 
} 

function processResponse(responseJSON) {
    var responseObject = JSON.parse(responseJSON);
    var displayText = "There are " + responseObject.employees.length + " employees:<ol>";
    for (var i = 0; i<responseObject.employees.length; i++) {
        var employee = responseObject.employees[i];
        displayText += "<li>" + employee.firstName + " " + employee.lastName + "<\/li>";
    }
    displayText += "<\/ol>";
    document.getElementById("responseArea").innerHTML = displayText;
}


$(function() {    // do once original document loaded and ready
    $('form[name="eg1"] input').click(function() {
        $.getJSON("data.json", function(responseObject, diditwork) {
            console.log(diditwork);
            var displayText = "There are " + responseObject.employees.length + " employees:<ol>";
            for (var i = 0; i<responseObject.employees.length; i++) {
                    var employee = responseObject.employees[i];
                    displayText += "<li>" +employee.firstName + " " + employee.lastName + "</li>";
            }
            displayText += "</ul>";
            $("#responseArea").html(displayText);
            } );  // getJSON
        } );  // click
  } ); // onReady

  