//Split the URL to Pull Out Blog Post ID
let blogPost = window.location.pathname.split('/');

//Pass Blog Post ID Into 'Create' URL
const editPost = async (event) => {
    event.preventDefault();
    console.log("Click Successful!");

    const comment_body = document.getElementById('edit_button').value.trim();
    console.log(blogPost);

    document.location.assign(`/create/${blogPost[2]}`);
};

const editButton = document.querySelectorAll('#edit_button');

//Loop Over Edit Buttons to Add Event Listeners
for (let i=0; i<editButton.length; i++) {
    editButton[i].addEventListener("click", editPost)};