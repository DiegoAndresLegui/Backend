const fs = require('fs');

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  addProduct(product) {
    const products = this.getProducts();
    const lastProduct = products[products.length - 1];
    const newId = lastProduct ? lastProduct.id + 1 : 1;
    const newProduct = { ...product, id: newId };
    products.push(newProduct);
    fs.writeFileSync(this.path, JSON.stringify(products));
    return newProduct;
  }

  getProducts() {
    try {
      const products = fs.readFileSync(this.path, 'utf-8');
      return JSON.parse(products) || [];
    } catch (error) {
      console.error(`Error while reading file: ${error.message}`);
      return [];
    }
  }

  getProductById(id) {
    const products = this.getProducts();
    return products.find((product) => product.id === id);
  }

  updateProduct(id, newProduct) {
    const products = this.getProducts();
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products[index] = { ...newProduct, id };
      fs.writeFileSync(this.path, JSON.stringify(products));
      return products[index];
    }
    return null;
  }

  deleteProduct(id) {
    const products = this.getProducts();
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      fs.writeFileSync(this.path, JSON.stringify(products));
      return true;
    }
    return false;
  }
}
e