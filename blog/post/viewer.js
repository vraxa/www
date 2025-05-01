// Helper: get ?post=... from URL
function getPostUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("post");
}
const renderer = new marked.Renderer();
renderer.image = function (href, title, text) {
  // const url = href.startsWith('http') ? href : `images/${href}`; // for external links
  // return `<img src="${url}" alt="${text}" title="${title}" />`;

  const imagePath = path.join(__dirname, "images", href);
  return `<img src="${imagePath}" src="${imagePath}" alt="${text}" title="${title}" />`; // for local references
};
const markdownUrl = getPostUrl();

if (markdownUrl) {
  fetch(markdownUrl)
    .then((res) => res.text())
    .then((md) => {
      const html = marked.parse(md);
      document.getElementById("content").innerHTML = html;
    })
    .catch((err) => {
      document.getElementById("content").innerHTML =
        "<p>Error loading post.</p>";
      console.error(err);
    });
} else {
  document.getElementById("content").innerHTML = "<p>No post selected.</p>";
}

checkmobile();
