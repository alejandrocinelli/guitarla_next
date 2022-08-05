import Head from "next/head"
import Header from "../components/Header"
import Footer from "./Footer"

function Layout({children,pagina, guitarra}) {
  return (
    <div>
        <Head> <title> GuitarLA - {pagina}  </title> 
        <meta name="description" content="Sitio Web de Venta de Guitarras"/>
        </Head>       
         <Header guitarra={guitarra}/>
        {children}
        <Footer/>
    </div>
  )
  Layout.defaultProps = {
    guitarra : null
  }
}
export default Layout