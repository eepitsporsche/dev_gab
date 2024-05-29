//New Comment Form Handler Functionality

const newCommentFormHandler = async (event) => {
  event.preventDefault();

  const post_id = parseInt(window.location.pathname.split('/').pop());

  const content = document.querySelector('#new_comment_body').value.trim();

  if (content) {
    //POST Request of JSON Data For New Blog Post Comment
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text: content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    //Reload Page or Respond with Status Code Data
    if (response.ok) {
      document.location.reload();
    } else {
      console.log('Response status:', response.status);
      console.log('Response text:', await response.text());
      alert('Failed to create a comment.');
    }
  }
};


//Submit Comment Button Event Listener
const newCommentForm = document.querySelector('#comment_form');
if (newCommentForm) { newCommentForm.addEventListener('submit', newCommentFormHandler) }
