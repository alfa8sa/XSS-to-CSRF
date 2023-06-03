# xss-to-csrf

The code snippet provided demonstrates a Cross-Site Request Forgery (CSRF) attack utilizing a Cross-Site Scripting (XSS) vulnerability.

By combining the Stored XSS vulnerability to inject the malicious script and the CSRF attack to perform unauthorized actions on the victim's behalf, this code demonstrates a dangerous scenario where the victim would post a new comment on a blog with his cookie information in case the Stored XSS paylaod gets triggered.
