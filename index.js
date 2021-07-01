const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const pessoas = require('./routes/pessoas')

app.use(express.static('public'))
app.use('/pessoas', pessoas)
app.get('/', (req, res) => res.render('index'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(port, () => console.log('listening on port ' + port))