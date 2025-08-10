const container = document.getElementById('blog-container');

async function fetchPosts() {
  const postFiles = ['posts/post100.md']; // add more here
  let html = '';

  for (const file of postFiles) {
    const res = await fetch(file);
    const text = await res.text();
    html += `<article>${marked.parse(text)}</article>`;
  }

  container.innerHTML = html;
}

if (container) fetchPosts();

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.danger-toggle');
  const content = document.querySelector('.danger-content');

  if (!toggle || !content) {
    console.warn('Danger zone elements not found', { toggle, content });
    return;
  }

  toggle.addEventListener('click', () => {
    const visible = content.classList.toggle('show');
    // update button text arrow
    toggle.textContent = visible ? 'Danger Zone ▲' : 'Danger Zone ▼';
    // maintain aria
    content.setAttribute('aria-hidden', visible ? 'false' : 'true');
  });
});
