const Products = require("./Products");

module.exports = class Book extends Products {
  constructor(title,synopsis,genre,pages,author,description,price,inStock = 0) {
    super(`livro:${title}`,description,price,inStock)
    this.title = title
    this.synopsis = synopsis
    this.genre = genre
    this.pages = pages 
    this.author = author
  }
}