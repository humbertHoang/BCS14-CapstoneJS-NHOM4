class ProductService {
  constructor() {}
  getProducts = () => {
    return axios({
      method: "get",
      url: "https://shop.cyberlearn.vn/api/Product",
    });
  };

  getProductById = (id) => {
    return axios({
      method: "get",
      url: `https://shop.cyberlearn.vn/api/Product/${id}`,
    });
  };
}

export default ProductService;
