import Layout from "../components/Layout"
import Link from "next/link"
import styles from "../styles/NotFound.module.css"

function notFound() {
  return (
   <Layout className={styles.a} pagina="404 NotFound" >

    <div className={styles.notFound}>
      <h1 className="heading">Pagina no encontrada</h1>
      <Link className={styles.a} href="/">Volver la Inicio</Link>

    </div>
     
   </Layout> 
  )
}
export default notFound