const Sequelize = require('sequelize')
const sequelize = new Sequelize('cadastro-orm', 'root', '', {
  dialect: 'mysql',
  host: '127.0.0.1'
})

sequelize.import('./pessoas.js')

sequelize.sync().then(() => console.log('SYNCED'))