export default class IncrementUseCase {
  execute ({counter = 0}) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          counter: counter - 1
        })
      }, 500)
    })
  }
}
