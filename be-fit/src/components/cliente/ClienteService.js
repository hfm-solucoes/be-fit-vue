export default class ClienteService {
  constructor (resource) {
    this._resource = resource('v1/cliente{/id}')
  }

  cadastra (cliente) {
    if (cliente.idUsuario) {
      return this._resource.update({id: cliente.idUsuario}, cliente).then(null, err => {
        console.log(err)
        throw new Error('Não foi possivel alterar o cliente')
      })
    } else {
      return this._resource.save(cliente).then(res => res.json(), err => {
        console.log(err)
        throw new Error('Não foi possivel salvar o cliente')
      })
    }
  }

  lista () {
    return this._resource.query()
      .then(res => res.json(), err => {
        console.log(err)
        throw new Error('Não foi possivel listar os clientes')
      })
  }

  busca (id) {
    return this._resource.get({ id })
      .then(res => res.json(), err => {
        console.log(err)
        throw new Error('Não foi possivel buscar o cliente')
      })
  }

  apaga (id) {
    return this._resource.delete({ id })
      .then(null, err => {
        console.log(err)
        throw new Error('Não foi possivel excluir o cliente')
      })
  }
}
