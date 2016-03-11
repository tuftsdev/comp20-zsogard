Zachary Sogard
Assignment 2 - Historic Landmarks
Comp 20 - Spring 2016
README.txt

All aspects have been correctly implemented. The page retrieves the user's location via navigator.geolocation,
sends an XHR request to the datastore, and retrieves the locations of people in the class and historic landmarks within one mile of where the user is.
Clicking on each person's marker displays their login and miles away in an info window.
Clicking on each landmark displays the name, miles away, and details in an info window.
Clicking on the user's marker displays the name of the closest landmark with its distance.
Finally, a polyline is rendered between the user's location and the closest landmark.

I've collaborated with Ben deButts on how to use the "this" keyword in the eventListener to attach it to a specific marker.
I've also used the JavaScript implementation of the Haversine distance function from http://www.movable-type.co.uk/scripts/latlong.html.

I spent approximately 4-5 hours on this assignment.
