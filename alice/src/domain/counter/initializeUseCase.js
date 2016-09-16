export default class IncrementUseCase {
  execute () {
    return Promise.resolve({
      counter: 0
    })
  }
}
