import React from 'react'

export const ModuleCard = (props = {}) => {
  const { name, tag, route, position_menu: positionMenu, priority } = props

  return (
    <div style={{ borderStyle: 'solid', margin: '10px' }}>
      <div className='user-details'>
        <p><b>Name:</b> {name}</p>
        <p><b>Tag:</b> {tag}</p>
        <p><b>Route:</b> {route}</p>
        <p><b>Position Menu:</b> {positionMenu}</p>
        <p><b>Priority:</b> {priority}</p>
      </div>
    </div>
  )
}
