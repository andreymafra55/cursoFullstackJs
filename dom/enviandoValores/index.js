function register(el){
  const username = el.children.username.value
  const password = el.children.password.value
  const passwordConfirmation = el.children.passwordConfirmation.value

  if(password === passwordConfirmation) {
    alert("Usuario " +username+ " registrado")
  }else {
    alert("As senhas não conferem")
  }
}