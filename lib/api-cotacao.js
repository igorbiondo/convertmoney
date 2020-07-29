const axios =  require('axios')

const url = 'https://economia.awesomeapi.com.br/all/USD-BRL'

const getCotacaoAPI = (data) => axios.get(url)
const extractCotacao = res => res.data.USD.ask

const getCotacao = async() => {
    const res = await getCotacaoAPI('')
    const cotacao = extractCotacao(res)
    return parseFloat(cotacao).toFixed(2)
}

module.exports = {
    getCotacao,
    extractCotacao,
    getCotacaoAPI
}