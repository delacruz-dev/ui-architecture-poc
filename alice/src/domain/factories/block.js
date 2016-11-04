import GetBlockTypesUseCase from '../block/getBlockTypesUseCase'
import ApiBlockRepository from '../block/apiBlockRepository'
import BlockValueObject from '../block/blockValueObject'

export default class BlockFactory {
  static getBlockTypesUseCase () {
    return new GetBlockTypesUseCase(BlockFactory.apiBlockRepository())
  }
  static apiBlockRepository () {
    return new ApiBlockRepository()
  }
  static blockValueObject (data) {
    return new BlockValueObject(data)
  }
}
