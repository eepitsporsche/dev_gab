//Delete Blog Post Function
const deletePost = async (event) => {
    event.preventDefault();
    console.log("Click Successful!");
    console.log(event.target);

    //Split the URL to Pull Out Blog Post ID
    let blogPost = window.location.pathname.split('/');
    console.log(blogPost);

    //Pass Blog Post ID Into 'Delete' URL
    const response = await fetch(`/api/blogPost/${blogPost[2]}`, {
        method: "DELETE",
    });

    //Redirect to Blog Dashboard or Respond with Status Code Data
    if (response.ok) {
        document.location.assign(`/blogDashboard`);
    } else {
        alert(response.statusText);
    }
};

const deleteButton = document.querySelectorAll("#delete_button");

//Loop Over Delete Buttons to Add Event Listeners
for (let i=0; i<deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deletePost)};