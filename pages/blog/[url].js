import { useRouter } from "next/router"
import { useEffect } from "react"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import Image from "next/image"
import {formaterDate} from "../../helpers"
import styles from "../../styles/BlogContainer.module.css"

const BlogID = ({resp}) => {
 
  const {contenido, published_at, imagen,  titulo} = resp

  return (
   <Layout pagina={`Blog - ${titulo}`}> 

    <main className="contenedor"> 
    <h1 className="heading">{titulo}</h1>

        <article className={styles.blogContainer}> 
           <Image src={imagen.url} alt={`imagen ${titulo}`} layout="responsive" width={800} height={600} />
        </article>

        <div className={styles.contenido}>
            <p className={styles.fecha}>{formaterDate( published_at)}</p>
    
            <p className={styles.texto}>{contenido}</p>
       </div>
    </main>
   </Layout>
  )
}

export async function getStaticPaths(){
    //const url =`http://localhost:1337/blogs/`
    const url =`${process.env.API_URL}/blogs/`
    const api = await fetch(url)
    const resp = await api.json()
    const paths = resp.map(resp => ({params: {url: resp.url}}))
    return {paths, fallback: false}
}

export  async function getStaticProps ({params:{url}}) {
    
    //const url = `http://localhost:1337/blogs/${id}` ..... en el commit3 esta de una manera mas sencilla 
    const urlBLog =`${process.env.API_URL}/blogs?url=${url}`
    const api = await fetch(urlBLog)
    const resp = await api.json()
    return { props: { 
      resp: resp[0] // retorna un array con un solo elemento porque el url es unico
     } }
}

//export async function getServerSideProps({query: {id}}) {
  
  //const url = `http://localhost:1337/blogs/${id}`
  //const url =`${process.env.API_URL}/blogs/${id}`
  //const api = await fetch(url)
  //const resp = await api.json()
  //console.log(resp)
  //return {
    // props: { resp 
    //} }
//}

export default BlogID