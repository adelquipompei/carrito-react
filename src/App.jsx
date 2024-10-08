import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import Tienda from './components/Tienda';
import Error404 from './components/Error404';
import Carrito from './components/Carrito';

function App() {
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
    { id: 4, nombre: 'Producto 4' },
  ];

  const [carrito, setCarrito] = useState([]);

  const addCarrito = (id, nombre) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);

    if (productoEnCarrito) {
      setCarrito(carrito.map(producto =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad + 1 }
          : producto
      ));
    } else {
      setCarrito([...carrito, { id, nombre, cantidad: 1 }]);
    }
  };

  return (
    <Contenedor>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
      </Menu>
      <main>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/tienda' element={<Tienda addCarrito={addCarrito} productos={productos} />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </main>
      <aside>
        <Carrito carrito={carrito} />
      </aside>
    </Contenedor>
  );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
