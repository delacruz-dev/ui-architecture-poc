import GetBlockTypesUseCase from '../block/getBlockTypesUseCase'
import ApiBlockRepository from '../block/apiBlockRepository'

export default class BlockFactory {
  static getBlockTypesUseCase () {
    return new GetBlockTypesUseCase(BlockFactory.apiBlockRepository())
  }
  static apiBlockRepository () {
    return new ApiBlockRepository()
  }
}
