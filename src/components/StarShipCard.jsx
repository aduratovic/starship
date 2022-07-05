import React from 'react'

const StarShipCard = ({ship}) => {
  return (
    <div className='card'>
        <h3 className='ship-name'>{ship.name}</h3>
        <p>Passenger:{ship.passengers}</p>
        <p>Cargo{ship.cargo_capacity}</p>
        <p>Length:{ship.length}</p>
    </div>
  )
}

export default StarShipCard