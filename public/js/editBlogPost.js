//Edit Blog Post Function

//Pass Blog Post ID Into 'Create' URL
const editPost = async (event) => {
    event.preventDefault();

    //Split the URL to Pull Out Blog Post ID
    const blogPostID = window.location.pathname.split('/')[window.location.toString().split('/').length-1];
    const blogPostTitle =  document.querySelector('text-area[name="blog_post_title"]').value;
    const blogPostText = document.querySelector('text-area[name="blog_post_text"]').value;

    const response = await fetch(`/api/blogPost/${blogPostID}`, {
        method: 'PUT',
        body: JSON.stringify({
            blogPostTitle,
            blogPostText
        }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }
};

document.querySelector('.edit_post_form').addEventListener('submit', editPost);


    //     console.log("Click Successful!");

//     //*May not need next line of code*
//     const comment_body = document.getElementById('edit_button').value.trim();
//     console.log(blogPost);

//     document.location.assign(`/create/${blogPost[2]}`);
// };

// const editButton = document.querySelectorAll('#edit_button');

// //Loop Over Edit Buttons to Add Event Listeners
// for (let i=0; i<editButton.length; i++) {
//     editButton[i].addEventListener("click", editPost)};