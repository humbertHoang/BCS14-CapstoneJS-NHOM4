// import { initRouter } from "./router.js";
import Product from "../model/Product.js";
import ProductService from "../service/ProductService.js";

async function fetchFeaturedProducts() {
  try {
    const productService = new ProductService();
    const response = await productService.getProducts();
    const products = response.data.content;
    displayFeaturedProducts(products);
  } catch (error) {
    console.error(error);
  }
}

function displayFeaturedProducts(products) {
  let html = "";
  for (let i = 0; i < 6; i++) {
    html += `
      <div class="col d-flex justify-content-center">
        <div class="card shadow-sm h-100">
          <img src="${products[i].image}" class="card-img-top d-block w-75 mx-auto" alt="${products[i].alias}">
            <div class="card-body">
              <h5 class="card-title fw-light fs-4">${products[i].name}</h5>
              <p class="card-text fw-light text-black-50">${products[i].shortDescription}</p>
            </div>
            <div class="d-flex align-content-center justify-content-center">
              <button href="#" class="btn btn-my-primary btn-lg flex-fill text-dark">Buy Now</button>
              <button href="#" class="btn btn-my-secondary btn-lg flex-fill">$${products[i].price}</button>
            </div>
        </div>
      </div>
    `;
  }
  document.getElementById("featured-products").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  // initRouter();
  fetchFeaturedProducts();
});
