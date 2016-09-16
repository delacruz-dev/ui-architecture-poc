import IncrementUseCase from '../counter/incrementUseCase'

export default class CounterFactory {
  static incrementUseCase () {
    return new IncrementUseCase()
  }
}
