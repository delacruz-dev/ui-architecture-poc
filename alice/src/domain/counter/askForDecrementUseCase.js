import DialogDataStructures from '@typeform/dialogs'

export default class AskForDecrementUseCase {
  execute ({counter = 0}) {
    return new Promise(resolve => {
      resolve({
        ...DialogDataStructures.AskForUserAndPassword,
        onConfirm: {
          service: 'counter',
          useCase: 'decrement'
        }
      })
    })
  }
}
