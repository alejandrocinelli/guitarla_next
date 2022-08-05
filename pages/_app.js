import '../styles/normalize.css'
import '../styles/globals.css'
import swal from 'sweetalert';

import {useState, useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const carritoLs = JSON.parse( localStorage.getItem('carrito')) ?? [];
    setCarrito(carritoLs)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  },[carrito])

  const agregarCarrito = (producto) => {

  if(carrito.some(p => p.id === producto.id)){
    const carritoActualizado = carrito.map(p => {
      if(p.id === producto.id){
        p.cantidad = producto.cantidad 
      }
      return p
    } 
  )
    setCarrito(carritoActualizado)
    swal("Excelente", "Tu producto fue agregado al carrito exitosamente", "success");
  }
  else{
   
    setCarrito([...carrito, producto])
    swal("Excelente", "Tu producto fue agregado al carrito exitosamente", "success");
  }
  }

  const actualizarCarrito = (producto) => {
    const carritoActualizado = carrito.map(p => {
      if(p.id === producto.id){
        p.cantidad = producto.cantidad 
      }
      return p
    } 
  )
    setCarrito(carritoActualizado)

  }

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter(p => p.id !== id)
    setCarrito(carritoActualizado)
  }

  return <Component {...pageProps}
  carrito={carrito}
  agregarCarrito={agregarCarrito}
  actualizarCarrito={actualizarCarrito}
  eliminarProducto={eliminarProducto}
 
  />
}

export default MyApp
