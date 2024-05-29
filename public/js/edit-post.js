//Edit/Delete Blog Post Functions

//Split the URL to Pull Out Blog Post ID
const post_id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];


//Edit Post
const updatePostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog_post_title").value.trim();
  const content = document.querySelector("#blog_post_text").value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update a post.");
      console.log(response.statusText);
    }
  }
};


//Event Listener
const updatePostButton = document.querySelector("#edit_post_button");
if (updatePostButton) { updatePostButton.addEventListener("click", updatePostFormHandler) }