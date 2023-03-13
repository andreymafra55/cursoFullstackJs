class Book {
  constructor(title){
    this.title = title
    this.published = false
  }

  publish(){
    this.published = true
  }
}

const cleanCode = new Book('Clean Code')
cleanCode.publish()
const refactoring = new Book('Refactoring')
console.log(cleanCode)
console.log(refactoring)
console.log(refactoring instanceof Book)