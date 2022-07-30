import React from "react"
import Image from "next/image"
import {formaterDate} from "../helpers"
import Link from "next/link"
import styles from "../styles/BlogContainer.module.css"

function BlogContainer({resp}) {

  return (
    <article>
         <Image src={resp.imagen.url} alt={""} layout="responsive" width={800} height={600} />
        <div>
                <h3 className={styles.contenido.h3}>{resp.titulo}</h3>
                <p className={styles.fecha}>{formaterDate( resp.published_at)}</p>
                <p className={styles.resumen}>{resp.resumen}</p>
                <Link href={`/blog/${resp.id}`}> 
                <a className={styles.enlace}>
                Ver Mas
                </a>
                </Link>   
        </div>
    </article>
  )
}

// para que funcione el url de imagen en el blog se debe agregar en next.config.js el siguiente codigo:
//  images: { domains: ['res.cloudinary.com']}

export default BlogContainer