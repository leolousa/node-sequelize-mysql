const Sequelize = require('sequelize')
const conn = require('../database/conexao')

const Post = conn.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

Post.sync();

Post.create({
  titulo: "Título de postagem",
  conteudo: "Teste de conteúdo"
})
