//Functionality to Edit Blog Posts on Blog Post Page

//Split the URL to Pull Out Blog Post ID
let blogPost = window.location.pathname.split('/');

const submitEdit = async (event) => {
    event.preventDefault();

    //Pull Form Data From createPost.handlebars
    const title = document.getElementById("titleInput").value;
    const description = document.getElementById("bodyInput").value;

    if (postTitle && postDescription) {
        const response = await fetch(`/api/blogPost/${blogPost[2]}`, {
            //PUT Request of JSON Data For Blog Post Edit
            method: 'PUT',
            body: JSON.stringify({
                title,
                description,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log(reponse)
        //Redirect to Blog Dashboard or Respond with Status Code Data
        if (response.ok) {
            document.location.assign("/blogDashboard");
        } else {
            alert(response.statusText);
        }
    }
};

//Submit Button Event Listener
const submitButton = document.getElementById("submitEdit");