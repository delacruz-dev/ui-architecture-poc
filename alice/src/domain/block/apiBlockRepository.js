import BlockFactory from '../factories/block'

const dataComingFromSomewhere = [{
  type: 1,
  name: 'Short Text',
  maxLength: true
}, {
  type: 2,
  name: 'Long text',
  maxLength: true,
  requierd: true
}]

export default class ApiBlockRepository {
  getBlockTypes () {
    return Promise.resolve({
      blockTypes: dataComingFromSomewhere.map(data => BlockFactory.blockValueObject(data))
    })
  }
}
