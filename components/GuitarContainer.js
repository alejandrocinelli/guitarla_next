import Tienda from "../pages/tienda"
import GuitarListContainer from "../components/GuitarListContainer"

function GuitarContainer({guitarras}) {
   
  return (
    <div>{guitarras.map(guitarra => (
        <GuitarListContainer key={guitarra.id} guitarra={guitarra} />
    ))}</div>
  )
}
export default GuitarContainer