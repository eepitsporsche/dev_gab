//Logout Function
const logout = async () => {
    const response = await fetch("/api/users/logout", {
    //POST Request of JSON-Encoded Data
        method: "POST",
        headers: { "Content-Type": "application.json" },
    });

    //Redirect to Homepage or Respond with Status Code Data
    if (response.ok) {
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
};

//Logout Click Event Listener
document.querySelector("#logout").addEventListener("click", logout);