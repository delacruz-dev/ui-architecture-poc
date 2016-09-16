import CounterFactory from './factories/counter'

class AliceDomain {
  constructor () {
    this._useCases = new Map()

    this._useCases.set('counter::increment', CounterFactory.incrementUseCase())
    this._useCases.set('counter::decrement', CounterFactory.decrementUseCase())
    this._useCases.set('counter::initialize', CounterFactory.initializeUseCase())
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
