export default class LoginService {
  constructor (resource) {
    var customActions = {
      autentica: {method: 'POST', url: 'v1/autentica'}
    }
    this._resource = resource('v1/login{/id}', {}, customActions)
  }

  cadastra (login) {
    if (login.idLogin) {
      return this._resource.update({id: login.idLogin}, login).then(null, err => {
        console.log(err)
        throw new Error('Não foi possivel alterar o login')
      })
    } else {
      return this._resource.save(login).then(null, err => {
        console.log(err)
        throw new Error(err.bodyText)
      })
    }
  }

  lista () {
    return this._resource.query()
      .then(res => res.json(), err => {
        console.log(err)
        throw new Error('Não foi possivel listar os usuarios')
      })
  }

  busca (id) {
    return this._resource.get({ id })
      .then(res => res.json(), err => {
        console.log(err)
        throw new Error('Não foi possivel buscar o usuario')
      })
  }

  apaga (id) {
    return this._resource.delete({ id })
      .then(null, err => {
        console.log(err)
        throw new Error('Não foi possivel excluir o usuario')
      })
  }

  autentica (login) {
    return this._resource.autentica(login)
      .then(res => res, err => {
        console.log(err)
        throw new Error('Não foi possivel autenticar')
      })
  }
}
