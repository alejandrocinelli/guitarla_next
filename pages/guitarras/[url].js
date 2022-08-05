import Image from "next/image";
import styles from "../../styles/GuitarListContainer.module.css";
import Layout from "../../components/Layout";

const Producto = ({ resp }) => {
  const { descripcion, precio, imagen, nombre } = resp;

  return (
    <Layout pagina={`Producto - ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          src={imagen[0].url}
          alt={`Imagen guitarra ${nombre}`}
          width={180}
          height={350}
          layout="responsive"
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.resumen}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
          {/* lo dejamos asi por el momento para darle forma pero el form lo implementaria mas con un useState*/}
          <form className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad</label>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <input type="submit" value="Agregar al Carrito"></input>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const api = await fetch(urlGuitarra);
  const resp = await api.json();

  return {
    props: {
      resp: resp[0], // retorna un array con un solo elemento porque el url es unico
    },
  };
}

export default Producto;
