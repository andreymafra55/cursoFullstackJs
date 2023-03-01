document.getElementById('sessionBtn').addEventListener('click',function(){
  const input = document.getElementById('session')
  sessionStorage.setItem('info',input.value)
  input.value = ''
})

document.getElementById('readSesssion').addEventListener('click',function(){
  const info = sessionStorage.getItem('info')
  alert('A informação salva é '+ info )
})

document.getElementById('localBtn').addEventListener('click',function(){
  const info = document.getElementById('local')
  localStorage.setItem('text',info.value)
  info.value = ''
})

document.getElementById('readLocal').addEventListener('click',function(){
  const text = localStorage.getItem('text')
  alert('A informação salva é '+ text )
})

document.getElementById('cookieBtn').addEventListener('click',function(){
  const input = document.getElementById('cookie')
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023,3,2) + ';'
  const path = 'path=/'
  document.cookie = cookie + expiration + path
  input.value = ''
})

document.getElementById('cookie2Btn').addEventListener('click',function(){
  const input = document.getElementById('cookie2')
  const cookie = 'text=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023,2,2) + ';'
  const path = 'path=/'
  document.cookie = cookie + expiration + path
  input.value = ''
})