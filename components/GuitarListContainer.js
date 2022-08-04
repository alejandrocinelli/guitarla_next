import GuitarContainer from "./GuitarContainer"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/GuitarListContainer.module.css"

function GuitarListContainer({guitarra}) {
  
    const {descripcion, imagen, nombre, precio, url} = guitarra
  return (
    <div className={styles.guitarra}>
       <Image src={imagen[0].url} alt={`Imagen guitarra ${nombre}`} width={180} height={350} layout="responsive"/>

       <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.resumen}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <Link href={`/guitarras/${url}`}> 
            <a className={styles.enlace} >
                Ver Producto</a> 
            </Link>
            
       </div>
    </div>
  )
}
export default GuitarListContainer