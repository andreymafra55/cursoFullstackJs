const Products = require("./Products");

module.exports = class Poster extends Products {
  constructor(name,description,height,width,price,inStock = 0) {
    super(name,description,price,inStock)
    this.height = height
    this.width = width
  }
}