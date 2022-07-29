import Layout from "../components/Layout"
import BlogContainer from "../components/BlogContainer"
import styles from "../styles/Blog.module.css"


function Blog({resp}) {
 
  return (
    <Layout pagina={"Blog"}>
        
        <main className="contenedor">
          <h2 className="heading">Blog</h2>

        <div className={styles.blog}>
          {resp.map(resp => (
            <BlogContainer key={resp.id} resp={resp} />
          ) )
           }
        </div>
       
        </main>

    </Layout>
  )
}

//getServerSideProps es una funcion que se ejecuta en el servidor y se usa para obtener datos de la base de datos
//y devolverlos a la pagina que se esta renderizando en el cliente (se usa asi por que es next.js)

export async function getServerSideProps() {

  const url ="http://localhost:1337/blogs/"
      const api = await fetch(url)
      const resp = await api.json()
     

  return{ props: 
    { 
    resp 
  } }

  }

export default Blog