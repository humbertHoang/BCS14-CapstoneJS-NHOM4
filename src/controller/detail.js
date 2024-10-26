import ProductService from "../service/ProductService.js";
async function fetchProductById(id) {
  try {
    const productService = new ProductService();
    const response = await productService.getProductById(id);
    const products = response.data.content;
    displayRelatedProducts(products);
  } catch (error) {
    console.error(error);
  }
}
function displayRelatedProducts(products) {
  const htmlShoesSize = products.size
    .map(
      (size, index) =>
        `<input type="radio" class="btn-check" name="btnradio" id="btnradio${
          index + 1
        }" autocomplete="off">
     <label class="btn btn-my-secondary" for="btnradio${
       index + 1
     }">${size}</label>`
    )
    .join("");
  const htmlProductbyId = `<div class="container">
      <div class="row row-gap-5">
          <div class="col-md-6">
              <img class="d-block w-50 mx-auto bg-light" src="${products.image}" alt="${products.alias}">
          </div>
          <div class="col-md-6 d-flex flex-column align-items-center align-items-md-start gap-2">
              <h1 class="fw-light">${products.name}</h1>
              <p>${products.description}</p>
              <h2 class="">Available size</h2>
              <div class="btn-group gap-3" role="group">${htmlShoesSize}</div>
              <h3>$${products.price}</h3>
              <div class="btn-group align-items-center gap-3" role="group">
                  <button class="btn btn-gradient-2">+</button>
                  <span>1</span>
                  <button class="btn btn-gradient-2">-</button>
              </div>
              <a href="#" class="btn btn-gradient-1">Add to cart</a>
          </div>
      </div>
    </div>`;
  document.getElementById("detail-product").innerHTML = htmlProductbyId;

  const htmlRelatedProducts = products.relatedProducts
    .map(
      (product) =>
        `<div class="col d-flex justify-content-center">
      <div class="card shadow-sm h-100">
        <img src="${product.image}" class="card-img-top d-block w-75 mx-auto" alt="${product.alias}">
          <div class="card-body">
            <h5 class="card-title fw-light fs-4">${product.name}</h5>
            <p class="card-text fw-light text-black-50">${product.shortDescription}</p>
          </div>
          <div class="d-flex align-content-center justify-content-center">
            <a href="/src/view/detail.html?productID=${product.id}" class="btn btn-my-primary btn-lg flex-fill text-dark">Buy Now</a>
            <a href="#" class="btn btn-my-secondary btn-lg flex-fill">$${product.price}</a>
          </div>
      </div>
    </div>`
    )
    .join("");
  document.getElementById("related-products").innerHTML = htmlRelatedProducts;
}

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("productID");
  fetchProductById(id);
};
