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
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    });
  };
}

export default ProductService;
