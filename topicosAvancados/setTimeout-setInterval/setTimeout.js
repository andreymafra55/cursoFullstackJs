console.log('Programa iniciado!')

 const timeOutId = setTimeout(el => {
   console.log('3 segundos se passaram desde que o programa foi iniciado')
 }, 1000 * 3 )

clearTimeout(timeOutId)