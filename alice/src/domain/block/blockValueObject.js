export default class BlockValueObject {
  constructor (data) {
    this.type = data.type
    this.name = data.name
    this.maxLength = data.maxLength
    this.required = data.required
  }

  get name () {
    return this.name
  }

  get type () {
    return this.type === 1 ? 'SHORT_TEXT' : 'LONG_TEXT'
  }

  get settings () {
    // TODO
  }
}
