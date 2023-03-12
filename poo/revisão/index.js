function Book(title,pages,tags,author) {
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false 
  this.inStock = 0
  this.addOnStock = function addOnStock(quantity){
    this.inStock += quantity
  }
  this.save =  function() {
    //save in database
  }
  this.post = function() {
    this.published = true
}
}

const tags = [' programming','study','code']

const cleanCode = new Book('Clean Code',500,tags,{name:'Robert Cecil Martin'})
cleanCode.addOnStock(100)
cleanCode.post()
console.log(cleanCode)

const refactoring = new Book('Refactoring',448,tags,'Martin Fowler')
refactoring.addOnStock(50)
refactoring.post()
console.log(refactoring)

