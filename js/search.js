function searchSite() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();

  if (query === "") {
    alert("Please enter something to search");
    return;
  }

  // pages & keywords
  const pages = {
    "home": "../index.html",
    "history": "../html/history.html",
    "about": "../html/about.html",
    "gallery": "../html/gallery.html",
    "contact": "../html/contact.html",
    "science": "../html/science.html",
    "museum": "../html/index.html"
  };

  for (let key in pages) {
    if (query.includes(key)) {
      window.location.href = pages[key];
      return;
    }
  }

  alert("No results found 😔");
}


