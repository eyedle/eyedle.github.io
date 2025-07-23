const container = document.getElementById('blog-container');

async function fetchPosts() {
  const postFiles = ['posts/post1.md']; // add more here
  let html = '';

  for (const file of postFiles) {
    const res = await fetch(file);
    const text = await res.text();
    html += `<article>${marked.parse(text)}</article>`;
  }

  container.innerHTML = html;
}

if (container) fetchPosts();
