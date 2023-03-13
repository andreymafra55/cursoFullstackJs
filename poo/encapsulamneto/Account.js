class Account {
  #password
  #balance = 0

  constructor(user) {
    this.email = user.email
    this.#password = user.password
  }

  getBalance(email,password){
    if(this.#authenticate(email,password)) {
      return this.#balance
    }else {
      console.log('usuario ou senha incorretos')
    }
  }

  #authenticate(email,password){
    return this.email === email && this.#password === password
  }
  deposit(value){
    this.#balance += value
  }
}

const user = {
  email:'andrey@email.com',
  password:'123456'
}

const myAccount = new Account(user)
myAccount.deposit(1500)
console.log(myAccount.getBalance('andrey@email.com','123456'))