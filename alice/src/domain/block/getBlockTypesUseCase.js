export default class GetBlockTypesUseCase {
  constructor (repository) {
    this._repository = repository
  }

  execute () {
    return this._repository.getBlockTypes()
  }
}
