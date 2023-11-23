const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('views engine', 'handlebars')

app.use(express.static("public"))

app.get('/', (requisicao, reposta) => {
    resposta.render('home')
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})