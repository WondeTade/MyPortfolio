/**
 * DOM Elements
 */

const 	time = document.getElementById('time'),
		greeting = document.getElementById('greeting'),
		name = document.getElementById('name'),
		suggest = document.getElementById('suggest');
/* When the user presses subscribe button, alert the user that successfully completed */

//Get access to the button and set up a click event listener
var button = document.getElementsByClassName("submit_button");
button.onclick = displayConfirmation;

function displayConfirmation(){
	var confirmation = document.getElementsByTagName("h1")[2];
	var input = document.getElementsByTagName("input").value;
	confirmation.innerHTM = "Hello " + input;
	alert("Email " + input + " Successfully completed")
}

const showAmPm = true;

//Show Time
function showTime() {
	let today = new Date(),
	hour = today.getHours(),
	min = today.getMinutes(),
	sec = today.getSeconds();

	//Set AM or PM
	const amPm = hour >= 12 ? 'PM' : 'AM';
	
	//12hrs Format
	hour = hour % 12 || 12;
	
	//Output Time
	time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
	
	setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBackgroundGreeting() {
	
	let today = new Date(),
	hour = today.getHours();
	
	if (hour < 12) 
	{
		//Morning
		document.body.style.backgroundImage = "url()"
		greeting.textContent = 'Good Morning';
	}
	else if (hour < 18) {
		// Afternoon
		document.body.style.backgroundImage = "url()"
		greeting.textContent = 'Good Afternoon';
	}
	else
	{
		//Evening
		document.body.style.backgroundImage = "url()"
		greeting.textContent = 'Good Evening';
		dcument.body.style.color = 'white';
	}
}

// Set Name
function setName(e){
	if (e.type === 'keypress') {
		// Make sure enter is pressed
		if (e.which == 13 || e.keyCode == 13) 
		{
			localStorage.setItem('name', e.target.innerText);
			name.blur();
		}
	}
	else 
	{
		localStorage.setItem('name', e.target.innerText);
	}
}

// Get Name 
function getName() {
	if (localStorage.getItem("name") === null)
	{
		name.textContent = '[enter Name]';
	}
	else
	{
		name.textContent = localStorage.getItem('name');
	}
}

// Get Suggest
function getSuggest() {
	if (localStorage.getItem('suggest') === null) 
	{
		suggest.textContent = '[Enter Suggestion here]';
	}
	else 
	{
		suggest.textContent = localStorage.getItem('suggest');
	}
}

// Set suggest
function setSuggest(e){
	if (e.type === 'keypress') 
	{
		// Make sure enter is pressed
		if (e.which == 13 || e.keyCode == 13) 
		{
			localStorage.setItem('suggest', e.target.innerText);
			suggest.blur();
		}
	}
	else 
	{
		localStorage.setItem('suggest', e.target.innerText);
	}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

suggest.addEventListener('keypress', setSuggest);
suggest.addEventListener('blur', setSuggest);


//Run
showTime();
setBackgroundGreeting();
//getName();
//getSuggest();

