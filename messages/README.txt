Zachary Sogard
Comp 20 - Spring 2016
Lab 6

1. Everything has been implemented correctly. The JavaScript parse function makes an XMLHttpRequest for the local data.json file and prints them on the page's HTML.

2. I haven't collaborated with anyone on the assignment

3. I spent about 30 minutes on the assignment.

Instructions, Part 2: Yes, it works because the XHR request is made to the same domain that served the page (localhost).

Instructions, Part 3: No, it does not work because the XHR request is made to a different domain than the domain that served the page, so it violates the Same-Origin Policy. Specifically, it makes an XHR request to https://messagehub.herokuapp.com but localhost served the page.

Is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not?

It's not possible to request data from a different origin, as this would violate the same origin policy. It is possible to request from the local machine since these are the same origin. XHR requests only succeed if they are made to the host that served the original web page. An exception to the rule is if the other host specifically allows this via an exception such as Cross-Origin Resource Sharing.