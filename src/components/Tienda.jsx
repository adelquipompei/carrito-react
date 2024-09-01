import React from 'react'
import Productos from './Productos'

function Tienda({addCarrito,productos}) {
  return (
    <>
      <div>Tienda</div>
      <Productos productos={productos} addCarrito = {addCarrito} />
    </>
  )
}

export default Tienda