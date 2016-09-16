import IncrementUseCase from '../counter/incrementUseCase'
import DecrementUseCase from '../counter/decrementUseCase'
import InitializeUseCase from '../counter/InitializeUseCase'

export default class CounterFactory {
  static incrementUseCase () {
    return new IncrementUseCase()
  }

  static decrementUseCase () {
    return new DecrementUseCase()
  }

  static initializeUseCase () {
    return new InitializeUseCase()
  }
}
