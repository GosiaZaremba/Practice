class InfiniteScroll {
  constructor(container, loader) {
    this.container = container;
    this.init();
    this.page = 1;
    this.loader = loader;
    this.loading = false;
  }
  init() {
    window.onload = this.getData;
    window.addEventListener("scroll", () => {
      if (this.loading) return;

      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        this.setLoading(true);
        this.getData();
      }
    });
  }
  setLoading(flag) {
    if (flag) {
      this.loader.classList.remove("hidden");
    } else {
      this.loader.classList.add("hidden");
    }
    this.loading = flag;
  }
  getData = async () => {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=9`;
    try {
      const res = await fetch(apiUrl);
      const photosArray = await res.json();
      this.displayPosts(photosArray);
    } catch (err) {
      console.log(err);
    }
    this.page++;
    this.setLoading(false);
  };

  displayPosts = (posts) => {
    this.container.innerHTML += posts
      .map((post) => {
        return `
      <div class="post">
      <h3>${this.capitalizeFirstLetter(post.title)}</h3>
      <p>${this.capitalizeFirstLetter(post.body)}</p>
      </div>
      `;
      })
      .join("");
  };

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

const iScroll = new InfiniteScroll(
  document.querySelector(".container"),
  document.querySelector(".loader-box")
);
