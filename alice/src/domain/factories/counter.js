import IncrementUseCase from '../counter/incrementUseCase'
import AskForDecrementUseCase from '../counter/AskForDecrementUseCase'
import InitializeUseCase from '../counter/InitializeUseCase'

export default class CounterFactory {
  static incrementUseCase () {
    return new IncrementUseCase()
  }

  static askForDecrementUseCase () {
    return new AskForDecrementUseCase()
  }

  static initializeUseCase () {
    return new InitializeUseCase()
  }
}
