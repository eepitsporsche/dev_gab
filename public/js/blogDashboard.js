//Functionality for Edit and Delete Buttons on blogDashboard.js

//Delete Functionality:
const deletePost = async (event) => {
    event.preventDefault();
    console.log("Click Successful!");
    console.log(event.target);

    let blogPostID = event.target.getAttribute("data-id");
    console.log(blogPostID);

        //Pass Blog Post ID Into 'Delete' URL
        const response = await fetch(`/api/blogPost/${blogPostID}`, {
            method: "DELETE",
        });

            //Redirect to Blog Dashboard or Respond with Status Code Data
    if (response.ok) {
        document.location.replace("/blogDashboard");
    } else {
        alert(response.statusText);
    }
};

const deleteButton = document.querySelectorAll("#delete_button");

//Loop Over Delete Buttons to Add Event Listeners
for (let i=0; i<deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deletePost)};


//Edit Functionality:
const editPost = async (event) => {
    event.preventDefault();
    console.log("Click Successful!");

    let blogPostID = event.target.getAttribute("data-id");
    console.log(blogPostID);

    //Pass Blog Post ID Into 'Create' URL
    document.location.assign(`/create/${blogPostID}`);
};

const editButton = document.querySelectorAll('#edit_button');

//Loop Over Edit Buttons to Add Event Listeners
for (let i=0; i<editButton.length; i++) {
    editButton[i].addEventListener("click", editPost)};