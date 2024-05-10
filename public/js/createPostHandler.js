//Create Blog Post Function
async function createPostHandler(event) {
    event.preventDefault();

    //Pull Form Data From createPost.handlebars
    const title = document.querySelector("#titleInput").value.trim();
    const description = document.querySelector("#bodyInput").value.trim();

    if (title && description) {
        const response = await fetch(`/api/blogPost`, {
            //POST Request of JSON Data For New Blog Post
            method: "POST",
            body: JSON.stringify({
                title,
                description,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        //Redirect to Blog Dashboard or Respond with Status Code Data
        if (response.ok) {
            document.location.replace("/blogDashboard");
        } else {
            alert(response.statusText);
        }
    }
}

//Submit Button Event Listener
document.querySelector(".createPostForm").addEventListener("submit", createPostHandler);