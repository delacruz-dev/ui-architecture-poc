export default class IncrementUseCase {
  execute ({counter = 0}) {
    return counter + 1
  }
}
