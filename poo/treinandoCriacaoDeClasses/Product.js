class Product {
  constructor(name,description,price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantity) {
    this.inStock += quantity
  }

  calculateDiscount(discount) {
    return this.price - (this.price * (discount/100))
  }
}

const celular = new Product('Iphone Xr','Acompanha carregador e cabo',3000)
celular.addToStock(100)
console.log(celular.calculateDiscount(10))
console.log(celular)