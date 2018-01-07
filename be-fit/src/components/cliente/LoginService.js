export default class LoginService {
  constructor (resource) {
    this._resource = resource('v1/login{/id}')
  }

  cadastrar (login) {
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
}
