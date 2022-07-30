import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

function Header() {
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
         </nav>
         
        </div>
      </div>
    </header>
  )
}
export default Header