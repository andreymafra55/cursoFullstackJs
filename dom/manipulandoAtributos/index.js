const input = document.getElementById('input')

document.getElementById('value').addEventListener('click',el => {
  input.value = input.value === '' ?  'Olá,mundo' : ''
  input.getAttribute('value')
})

document.getElementById('type').addEventListener('click',el => {
  //input.type = input.type !== 'radio' ? 'radio' : 'text'
  input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', el => {
  input.placeholder = "digite algo"
})

document.getElementById('disable').addEventListener('click',el => {
  input.setAttribute('disabled' , !input.disabled)
})

document.getElementById('data').addEventListener('click', el => {

  const data = input.dataset.somethingElse
  console.log('O valor do atributo data-something-else é: ' +  data)

  input.dataset.something = "Novo Valor"
  console.log('O valor do atributo data-something-else agora é: ' +  input.dataset.somethingElse)
})