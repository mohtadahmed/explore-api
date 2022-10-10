function displayPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => loadPosts(data))
}

function loadPosts(posts){
    const postContainer = document.getElementById('posts-container')
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>User: ${post.id}</h4>
            <h4>Post Title: ${post.title}</h4>
            <p><b>Post Descriptiions:</b> ${post.body}</p>
        `
        postContainer.appendChild(postDiv);
    }
}


displayPosts();