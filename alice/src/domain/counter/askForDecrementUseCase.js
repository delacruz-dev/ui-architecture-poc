import dialogs from '@typeform/dialogs'

console.log(dialogs)

export default class AskForDecrementUseCase {
  execute ({counter = 0}) {
    return new Promise(resolve => {
      resolve({
        ...dialogs.askForUserAndPassword,
        onConfirm: {
          service: 'counter',
          useCase: 'decrement'
        }
      })
    })
  }
}
