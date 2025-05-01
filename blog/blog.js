let posts = [];

fetch("posts.json")
  .then((res) => res.json())
  .then((posts) => {
    const grid = document.getElementById("grid");
    const columns = 2;

    posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first

    for (let i = 0; i < posts.length; i += columns) {
      const row = document.createElement("div");
      row.className = "row";

      for (let j = 0; j < columns; j++) {
        const post = posts[i + j];
        const box = document.createElement("div");
        box.className = "gridbox";

        if (post) {
          box.innerHTML = `
            <div class="box-inner">
              <h3 class="textpush">${post.title}</h3>
              <p class="textpush">${post.description}</p>
            </div>
          `;
          const inner = box.querySelector(".box-inner");
          const h3 = inner.querySelector("h3");
          let lastSeen = h3.innerHTML;
          box.addEventListener("click", () => {
            window.location.href = post.url;
          });

          box.addEventListener("mouseenter", () => {
            inner.style.paddingLeft = "10%";
            h3.innerHTML = "/ " + lastSeen;
          });

          box.addEventListener("mouseleave", () => {
            inner.style.paddingLeft = "5%";
            h3.innerHTML = lastSeen;
          });

          box.style.cursor = "pointer";
          row.appendChild(box);
        }
      }

      grid.appendChild(row);
    }
  });

checkmobile();
