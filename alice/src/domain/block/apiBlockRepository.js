export default class ApiBlockRepository {
  getBlockTypes () {
    return Promise.resolve({
      blockTypes: [{
        type: 'SHORT_TEXT',
        name: 'Short Text',
        settings: [{
          name: 'Max Length',
          type: 'number'
        }, {
          name: 'Required',
          type: 'boolean'
        }]
      }, {
        type: 'LONG_TEXT',
        name: 'Long Text',
        settings: [{
          name: 'Max Length',
          type: 'number'
        }]
      }]
    })
  }
}
