import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";
import Image from "next/image";
import {useState, useEffect} from "react";

function Carrito({ carrito, actualizarCarrito, eliminarProducto }) {

const [total, setTotal] = useState(0)

useEffect(() => {

  const totalCal = carrito.reduce((total, p) => total + (p.precio * p.cantidad), 0)
  setTotal(totalCal)
}, [carrito])

  return (
    <Layout pagina={"Carrito de Compras"}>
      <h2 className="heading">Carrito de compras</h2>

      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
        <h2>Articulos</h2>
          {carrito.length === 0
            ? "Carrito Vacio"
            : carrito.map((prod) => (
                <div key={prod.id} className={styles.prod}>
                  <div>
                    <Image
                      src={prod.imagen}
                      alt={prod.nombre}
                      width={250}
                      height={480}
                      layout="responsive"
                    />
                  </div>

                  <div>
                    <p className={styles.nombre}>{prod.nombre}</p>
                    <div className={styles.cantidad}>
                    
                    <p>Cantidad:</p>
                    <select value={prod.cantidad} className={styles.select}
                    onChange={(e) => actualizarCarrito({...prod, cantidad: Number(e.target.value)})}
                     >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                    </div>
                    <p className={styles.precio}>
                    $<span>{prod.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      SubTotal: $<span>{prod.cantidad * prod.precio}</span>
                    </p>
                  </div>
                  <button
                  type="button"
                  className={styles.eliminar}
                  onClick={() => swal({
                    title: "¿Estas seguro?",
                    text: "Si confirmas se eliminara el producto del carrito?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      eliminarProducto(prod.id)
                      swal("El producto se elimino del carrito", {
                        icon: "success",
                        
                      });
                    } else {
                      swal("Su producto sigue en el carrito");
                    }
                  })
                    
                    }
                  >Eliminar</button>
                </div>
              ))}
        </div>
        <div className={styles.resumen}>
          
          {total > 0 ? (<>
          
          <h3>Resumen del Pedido</h3>
          <p>Subtotal: ${total}</p>

           </>) : (<p>El carrito esta vacio</p>)}
        </div>
      </main>
    </Layout>
  );
}
export default Carrito;
