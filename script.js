// Your web app's Firebase configuration
var firebaseConfig =
{
	apiKey: "AIzaSyA3hhFVyK4j3P1dJkeaqlhkGX06UjW8eW4",
	authDomain: "contactus-9f4db.firebaseapp.com",
	databaseURL: "https://contactus-9f4db.firebaseio.com",
	projectId: "contactus-9f4db",
	storageBucket: "",
	messagingSenderId: "208739056666",
	appId: "1:208739056666:web:601e30b8850bf5af"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("formContactUs").addEventListener("submit", submitForm);

// Submit form
function submitForm(e)
{
	e.preventDefault();

	// Get Values
	var name = getInputValue("txtName");
	var company = getInputValue("txtCompany");
	var email = getInputValue("txtEmail");
	var phone = getInputValue("txtPhoneNumber");
	var message = getInputValue("txtMessage");

	// Save to firebase
	saveMessage(name, company, email, phone, message);

	// Show alert
	document.querySelector(".alert").style.display = "block";

	// Hide alert after 3 seconds
	setTimeout(function()
	{
		document.querySelector(".alert").style.display = "none";
	}, 3000);

	// Clear form
	document.getElementById("formContactUs").reset();
}

// Function to get form values
function getInputValue(id)
{
	return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message)
{
	var newMessageRef = messagesRef.push();
	newMessageRef.set(
		{
			name: name,
			company: company,
			email: email,
			phone: phone,
			message: message
		});
}