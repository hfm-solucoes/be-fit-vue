export default class MedidasService {
  constructor (resource) {
    this._resource = resource('v1/medida{/id}')
  }

  cadastra (medida) {
    return this._resource.save(medida).then(res => res.json(), err => {
      console.log(err)
      throw new Error(err)
    })
  }

  lista () {
    return this._resource.query()
      .then(res => res.json(), err => {
        console.log(err)
      })
  }

  busca (id) {
    return this._resource.get({ id })
      .then(res => res.json(), err => {
        console.log(err)
        throw new Error('Não foi possivel buscar a medida')
      })
  }

  apaga (id) {
    return this._resource.delete({ id })
      .then(null, err => {
        console.log(err)
        throw new Error('Não foi possivel apagar a medida')
      })
  }
}