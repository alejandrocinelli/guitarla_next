import Tienda from "../pages/tienda"
import GuitarListContainer from "../components/GuitarListContainer"
import styles from "../styles/GuitarContainer.module.css"

function GuitarContainer({guitarras}) {
   
  return (
    <div className={styles.guitarContainer}>{guitarras.map(guitarra => (
        <GuitarListContainer key={guitarra.id} guitarra={guitarra} />
    ))}</div>
  )
}
export default GuitarContainer