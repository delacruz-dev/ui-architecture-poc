import dialogs from '@typeform/dialogs'

export default class AskForDecrementUseCase {
  execute ({counter = 0}) {
    return new Promise(resolve => {
      resolve({
        counter,
        askForConfirmation: {
          dialog: dialogs.askForUsername,
          onConfirm: {
            service: 'counter',
            useCase: 'decrement'
          }
        }
      })
    })
  }
}
