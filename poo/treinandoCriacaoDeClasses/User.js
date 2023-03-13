class User {
  constructor(fullName,email,password){
    this.fullName = fullName
    this.email = email
    this.password = password
  }

  login(email,password){
    if(this.email === email && this.password === password){
      console.log('Usuario logado com sucesso')
    }else {
      console.log('Email ou senha incorretos')
    }
  }
}

const eu = new User('Andrey Mafra','andreymafra55@gmail.com','backend')
eu.login('andreymafra55@gmail.com','backend')