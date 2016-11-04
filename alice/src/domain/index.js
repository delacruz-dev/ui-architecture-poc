import CounterFactory from './factories/counter'
import BlockFactory from './factories/block'

class AliceDomain {
  constructor () {
    this._useCases = new Map()

    this._useCases.set('counter::increment', CounterFactory.incrementUseCase())
    this._useCases.set('counter::askForDecrement', CounterFactory.askForDecrementUseCase())
    this._useCases.set('counter::decrement', CounterFactory.decrementUseCase())
    this._useCases.set('counter::initialize', CounterFactory.initializeUseCase())

    this._useCases.set('block::getBlockTypes', BlockFactory.getBlockTypesUseCase())
  }

  initialize () {
    return this.service('counter').useCase('initialize')
  }

  service (serviceName) {
    return {
      useCase: (useCase) => {
        const key = `${serviceName}::${useCase}`

        if (this._useCases.has(key)) {
          return this._useCases.get(key)
        } else {
          throw new Error(`There is no implememntation of the ${useCase} use case in the ${serviceName} service`)
        }
      }
    }
  }
}

export default new AliceDomain()
