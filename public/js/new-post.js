//Create Blog Post Function

const newPostFormHandler = async (event) => {
  event.preventDefault();

  //Pull Form Data From newpost.handlebars
  const title = document.querySelector('#new_post_title').value.trim();
  const content = document.querySelector('#new_post_body').value.trim();

  if (title && content) {
    //POST Request of JSON Data For New Blog Post
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    //Redirect to Blog Dashboard or Respond with Status Code Data
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create a new post.');
      console.log(response.statusText);
    }
  }
};


//New Post Submit Button Event Listener
const newPostForm = document.querySelector('.createPostForm');
if (newPostForm) { newPostForm.addEventListener('submit', newPostFormHandler) }
