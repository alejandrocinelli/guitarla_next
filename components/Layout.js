import Head from "next/head"
import Header from "../components/Header"
import Footer from "./Footer"

function Layout({children,pagina}) {
  return (
    <div>
        <Head> <title> GuitarLA - {pagina}  </title> 
        <meta name="description" content="Sitio Web de Venta de Guitarras"/>
        </Head>       
         <Header/>
        {children}
        <Footer/>
    </div>
  )
}
export default Layout