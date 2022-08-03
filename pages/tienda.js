import Layout from "../components/Layout"
import GuitarContainer from "../components/GuitarContainer"

function Tienda({guitarras}) {
  
  return (

    <Layout pagina={"Tienda Virtual"}>

      <main className="contenedor"> 
        <h2 className='heading'>Nuestra Coleccion</h2>

        <GuitarContainer guitarras={guitarras} />
             
      </main>
    </Layout>
  )
}

// estas funciones getServerSideProps y getStaticProps se ejecutan solo en pages y url's dinamicas ... no en components porque son funciones de next.js
// por eso no la puedo usar en components 

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras/`
  const api = await fetch(url)
  const guitarras = await api.json()

  return { props: { guitarras } }
  }


export default Tienda