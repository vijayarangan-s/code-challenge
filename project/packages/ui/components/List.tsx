import React from 'react'

export const List = (props: any) => {

  return (
    <tr>
      <td>{props?.name}</td>
      <td>{props?.url}</td>
      <td className='delete-text' onClick={() => props.onDeletePokemon(props?.name)}>Delete</td>
    </tr>
  )
}