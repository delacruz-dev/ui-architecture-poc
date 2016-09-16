export default class IncrementUseCase {
  execute ({counter = 0}) {
    return Promise.resolve({
      counter: counter + 1
    })
  }
}
