const axios =  require('axios')

const url = 'https://economia.awesomeapi.com.br/all/USD-BRL'

axios
    .get(url)
    .then( res => console.log(res.data.USD))