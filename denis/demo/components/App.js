import React from 'react'
import Denis from 'denis'

const handleConfirm = (action) => console.log(action)

export default () => <Denis onConfirm={handleConfirm} />
