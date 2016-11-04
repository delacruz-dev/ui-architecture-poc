import React from 'react'

const BlockTypes = ({blockTypes, onActionDispatched}) => {
  return (
    <ul>
    {
      blockTypes.map((blockType, index) => {
        return (
          <li key={index}><button onClick={() => onActionDispatched(blockType)}>{blockType.name}</button></li>
        )
      })
    }
    </ul>
  )
}

export default BlockTypes
