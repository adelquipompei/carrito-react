
import styled from 'styled-components'
function Carrito({carrito}) {



  return (
   <div>
         <h3> Carrito de compras </h3>
         {carrito.length > 0 ? carrito.map((elem,index) => <Producto key={index}> <NombreProducto>{elem.nombre}</NombreProducto> cantidad: {elem.cantidad} </Producto>) : <p>Aun no has agregado ningun producto al carrito</p>}
   </div>
  )
}

const Producto = styled.div`
padding: 10px;
border-bottom: 1px solid #ebebf3;
font-size: 14px;
`;

const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;

export default Carrito