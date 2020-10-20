import { Switch } from '@material-ui/core'
import React from 'react'

function ToggleModMenu({ modMenuFixed, setModMenuFixed }) {
  return (
    <Switch
      checked={modMenuFixed}
      onChange={() => setModMenuFixed(prev => !prev)}
      name="mode menu switch"
    />
  )
}

export default ToggleModMenu
