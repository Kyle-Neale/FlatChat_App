const BASE_URL = "https://api.giphy.com/v1/gifs/search";
const API_KEY = "DuwEzu31R50wYuulJLODV01F71sREav0";
const LIMIT = 30;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".modal-content .container");
  const searchForm = document.querySelector("form#gif-search");
  const gifBttn = document.querySelector("button#myBtn");
  const submitBttn = document.querySelector("input#submit-button");

  // gifBttn.style.display = "inline";
  gifBttn.style.float = "right";
  submitBttn.style.float = "right";

  searchForm.addEventListener("submit",  (event) => {
    event.preventDefault();
    container.innerHTML = ""
    const searchInput = searchForm.querySelector("#search-value");
    let searchTerm = searchInput.value

    fetch(`${BASE_URL}?q=${searchTerm}&api_key=${API_KEY}&limit=${LIMIT}`)
    .then(resp => resp.json())
    .then(respObj => respObj.data.forEach(gif => {
      let img = document.createElement("img");
      img.src = gif.images.original.url
      img.classList.add("gif");
      container.append(img);
    }))
  })

  document.addEventListener("click", (event) => {
    let messageBody = document.querySelector("#message-body");
    if (event.target.classList.contains('gif')) {
      let gifImg = event.target;
      messageBody.value = gifImg.src;
    }
  })

})
