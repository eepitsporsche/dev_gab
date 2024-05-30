//Login Form Handler Functionality


const loginFormHandler = async (event) => {
  event.preventDefault();
  //Pull Data From Login Form
  const name = document.querySelector('#username_login').value.trim();
  const password = document.querySelector('#password_login').value.trim();

  if (name && password) {
    // Send POST Request to Login Endpoint with Input Values as JSON Data
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    //Redirect to Homepage or Respond with Status Code Data
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in.');
      console.log(response.statusText);
    }
  }
};


//Login Form Event Listener
const loginForm = document.querySelector('.login_form');
if (loginForm) { loginForm.addEventListener('submit', loginFormHandler) }
