import GuitarContainer from "./GuitarContainer"
import Image from "next/image"
import Link from "next/link"

function GuitarListContainer({guitarra}) {
   console.log(guitarra)
   // console.log(guitarra.nombre)
    const {descripcion, imagen, nombre, precio, url} = guitarra
  return (
    <div>
       <Image src={imagen[0].url} alt={`Imagen guitarra ${nombre}`} width={500} height={350} layout="responsive"/>

       <div>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Precio: {precio}</p>
            
       </div>
    </div>
  )
}
export default GuitarListContainer