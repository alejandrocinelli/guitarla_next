import { useRouter } from "next/router"
import { useEffect } from "react"

const BlogID = ({resp}) => {
 
  return (
    <div>BlogID...{resp.contenido}</div>
  )
}

export async function getStaticPaths(){
    const url ="http://localhost:1337/blogs/"
    const api = await fetch(url)
    const resp = await api.json()
    const paths = resp.map(resp => ({params: {id: resp.id.toString()}}))
    return {paths, fallback: false}
}

export  async function getStaticProps ({params:{id}}) {
    
    const url = `http://localhost:1337/blogs/${id}`
    const api = await fetch(url)
    const resp = await api.json()
    return { props: { resp } }
}

//export async function getServerSideProps({query: {id}}) {
  
  //const url = `http://localhost:1337/blogs/${id}`
  //const api = await fetch(url)
  //const resp = await api.json()
  //console.log(resp)
  //return {
    // props: { resp 
    //} }
//}

export default BlogID