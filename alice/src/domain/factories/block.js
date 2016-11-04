import GetBlockTypesUseCase from '../block/getBlockTypesUseCase'

export default class BlockFactory {
  static getBlockTypesUseCase () {
    return new GetBlockTypesUseCase()
  }
}
