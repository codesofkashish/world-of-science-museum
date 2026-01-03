function searchSite() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();

  if (query === "") {
    alert("Please enter something to search");
    return;
  }

  // pages & keywords
  const pages = {
  
  };

  for (let key in pages) {
    if (query.includes(key)) {
      window.location.href = pages[key];
      return;
    }
  }

  alert("No results found 😔");
}




