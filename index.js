const express = require('express')
const app = express()
const path = require('path')

const convert = require('./lib/convert')
const apiCotacao = require('./lib/api-cotacao')

app.set('view engine', 'ejs')
app.set('viws', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 3000

app.get('/', async(req, res) => {
    const cotacao = await apiCotacao.getCotacao()
    res.render('home', {
        cotacao
    })
})
app.get('/cotacao', (req, res) => {
    const {cotacao, quantidade} = req.query
    if(cotacao && quantidade && cotacao != Number) {
        const conversao = convert.convert(cotacao,quantidade)
        res.render('cotacao',{
            error: false,
            cotacao: convert.toMoney(cotacao),
            quantidade: convert.toMoney(quantidade),
            conversao: convert.toMoney(conversao)
        })
    }else{
        res.render('cotacao', {
            error: 'Valores inválidos'
        })
    }
})

app.listen(port, err => {
    if(err){
        console.log('Não foi possivel iniciar')
    }else{
        console.log('ConvertMyMoney está online')
    }

})