import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import {useRouter} from 'next/router'

function Header({guitarra}) {

  const router = useRouter()
 

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
         <Link href="/"> 
         <a>
            <Image priority="true" src="/img/logo.svg" alt="GuitarLA" width={400} height={400} />
            </a>
         </Link>
                
         <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
          <Link href="/carrito">
            <a>
              <Image src="/img/carrito.png" alt="Carrito de compras" width={30} height={25} />
            </a>
          </Link>
         </nav>
         </div>
         {guitarra && ( 
          <div className={styles.modelo}>
            <h2>{guitarra.nombre}</h2>
            <p className={styles.modelo}>{guitarra.descripcion}</p>
            <p className={styles.precio}>${guitarra.precio}</p>
            <Link href={`guitarras/${guitarra.url}`}>
            <a className={styles.enlace}>
              Ver Producto
            </a>
            </Link>
          </div>
         )}
      </div>
      
    {router.pathname === '/' && (
      <div className={styles.guitarra}>
          <Image layout='fixed' width={500} height={1200} src='/img/header_guitarra.png' alt="  Guitarras"/>
      </div>
     
    )}

    </header>
  )
}
export default Header