import React from 'react'
import {Alice} from 'alice'

const handleActionDispatched = (action) => console.log(action)

export default () => <Alice onActionDispatched={handleActionDispatched} />
