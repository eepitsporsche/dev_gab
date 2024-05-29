//Delete Blog Post Function

const deletePost = async (post_id) => {
  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  //Reload Page or Respond with Status Code Data
  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to delete the post.");
    console.log(response.statusText);
  }
};


const deletePostHandler = (event) => {
  if (event.target.matches("#delete_post_button")) {
    const post_id = event.target.getAttribute("data-post-id");
    deletePost(post_id);
  }
};


document.addEventListener("click", deletePostHandler);
