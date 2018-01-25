var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'mozilla1.jpg') {
        myImage.setAttribute ('src','mozilla.jpg');
    }
    if(mySrc ==='mozilla.jpg'){
		myImage.setAttribute ('src','mozilla2.jpg');
	}
	
	if(mySrc ==='mozilla2.jpg'){
      myImage.setAttribute ('src','mozilla1.jpg');
    }

}
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Mozilla Firefox Update!';

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}