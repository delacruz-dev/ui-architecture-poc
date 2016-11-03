export default class DecrementUseCase {
  execute ({counter = 0}) {
    return Promise.resolve({
      counter: counter - 1
    })
  }
}
