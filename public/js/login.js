//Login and Create New Account Functionality

//Login Function For Existing User
const loginForm = async (event) => {
    event.preventDefault();

    //Pull Data From Login Form
    const email = document.querySelector("#email_login").value.trim();
    const password = document.querySelector("#password_login").value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            //POST Request of JSON Data For New Blog Post
            method: "POST",
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        
        //Redirect to Homepage or Respond with Status Code Data
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }
};


//Create New Account Function
const newAccountForm = async (event) => {
    event.preventDefault();

    //Pull Data Create New Account Form
    const name = document.querySelector("#new_account_name").value.trim();
    const email = document.querySelector("#new_account_email").value.trim();
    const password = document.querySelector("#new_account_password").value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            //POST Request of JSON Data For New Blog Post
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: { "Content-Type": "application/json" },
        });

        //Redirect to Homepage or Respond with Status Code Data
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }
};


//Login Form Event Listener
document.querySelector(".login_form").addEventListener("submit", loginForm);

//Create New Account Form Event Listener
document.querySelector(".new_account_form").addEventListener("submit", newAccountForm);