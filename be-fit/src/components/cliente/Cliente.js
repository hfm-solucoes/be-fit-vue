export default class Cliente {
  constructor (nome, dtNasc, cpf, rg, sexo, endereco, numero, bairro, cidade, uf, cep, telefone, idLogin) {
    this.nome = nome
    this.dtNasc = dtNasc
    this.cpf = cpf
    this.rg = rg
    this.sexo = sexo
    this.endereco = endereco
    this.numero = numero
    this.cidade = cidade
    this.uf = uf
    this.cep = cep
    this.telefone = telefone
    this.idLogin = idLogin
  }
}
