//Create New User Account Form Handler Functionality

const signupFormHandler = async (event) => {
  event.preventDefault();

  //Pull Data from Signup Form
  const name = document.querySelector('#new_account_username').value.trim();
  const email = document.querySelector('#new_account_email').value.trim();
  const password = document.querySelector('#new_account_password').value.trim();

  if (name && email && password) {
    //POST Request of JSON Data For New User
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    //Redirect to Homepage or Respond with Status Code Data
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
      console.log(response.statusText);
    }
  }
};


//Signup Button Event Listener
const signupForm = document.querySelector('#new_account_form');
if (signupForm) { signupForm.addEventListener('submit', signupFormHandler) }