import IncrementUseCase from '../counter/incrementUseCase'
import DecrementUseCase from '../counter/decrementUseCase'
import AskForDecrementUseCase from '../counter/AskForDecrementUseCase'
import InitializeUseCase from '../counter/InitializeUseCase'

export default class CounterFactory {
  static incrementUseCase () {
    return new IncrementUseCase()
  }

  static decrementUseCase () {
    return new DecrementUseCase()
  }

  static askForDecrementUseCase () {
    return new AskForDecrementUseCase()
  }

  static initializeUseCase () {
    return new InitializeUseCase()
  }
}
