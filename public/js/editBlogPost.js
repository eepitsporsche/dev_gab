//Edit Blog Post Form Handler Function

const editPost = async (event) => {
    event.preventDefault();

    //Split the URL to Pull Out Blog Post ID
    const blogPostID = window.location.pathname.split('/')[window.location.toString().split('/').length-1];
    const blogPostTitle =  document.querySelector('input[name="blog_post_title"]').value.trim();
    const blogPostText = document.querySelector('text-area[name="blog_post_text"]').value.trim();

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