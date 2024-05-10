//New Comment Functionality

async function newComment(event) {
    event.preventDefault();
    console.log("Click Successful!");

    const commentBody = document.getElementById('comment').value.trim();
    const url = window.location.toString().split('/');
    const blogPostID = url[url.length - 1];

    if (commentBody) {
        const response = await fetch(`/api/comment`, {
            //POST Request of JSON Data For New Blog Post Comment
            method: 'POST',
            body: JSON.stringify({
                blogPostID,
                commentBody,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        //Reload Page or Respond with Status Code Data
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

//Submit Button Event Listener
document.getElementById("comment_form").addEventListener("submit", newComment);