const toggleButton = document.getElementById('toggle-button');
const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');
const title = document.getElementById('title');

let isSignup = true;

toggleButton.addEventListener('click', function() {
	isSignup = !isSignup;
	if (isSignup) {
		signupForm.style.display = 'block';
		signinForm.style.display = 'none';
		title.textContent = 'Sign Up';
	} else {
		signupForm.style.display = 'none';
		signinForm.style.display = 'block';
		title.textContent = 'Sign In';
	}
});