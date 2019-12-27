//setando configurações
const devConfig = requiere("./dev.js");
const prodConfig = requiere("./prod.js");

//Pega a acessa as variaveis de ambiente no seu so, para ver se o o virus ta rodando em qual ambiente
module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

