

const pegar = fetch('https://api.nasa.gov/planetary/apod?api_key=AKK3qowH4jjLe1gDU306EOd1n7lDohpJ3hGRGBAY',{

method: 'GET'
})
.then(function(respostaDoServidor){
console.log(respostaDoServidor)
})