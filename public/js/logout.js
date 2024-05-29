//Logout Functionality


const logoutHandler = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  //Redirect to Homepage or Respond with Status Code Data
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
    console.log(response.statusText);
  }
};


//Logout Button Event Listener
const logoutButton = document.querySelector('#logout'); //Logout Tag from main.handlebars
if (logoutButton) { logoutButton.addEventListener('click', logoutHandler) }
