const Sequelize = require('sequelize')
const seq = new Sequelize('fundamento', 'fundamento_user', 'to120120', {
  host: "localhost",
  dialect: "mysql"
})

/**
 * seq.authenticate()
  .then(()=>{
    console.log("Conectado com sucesso!")
  }).catch((erro)=>{
    console.log(`Falha ao conectar-se ao banco: ${erro}`)
  })

 */

module.exports = seq;



 