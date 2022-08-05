import Layout from "../components/Layout";
import GuitarContainer from "../components/GuitarContainer";
import Curso from "../components/Curso";

export default function Home({ guitarras, cursos }) {
  return (
    <Layout pagina={"Inicio"}
    guitarra={guitarras[1]}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestros Productos</h1>
        <GuitarContainer guitarras={guitarras} />
      </main>
      <Curso cursos={cursos} />
    </Layout>
  );
}

export async function getServerSideProps() {
  //multiples consultas a la api para obtener los datos de las guitarras y los cursos

  const urlGuitarras = `${process.env.API_URL}/guitarras/`;
  const urlCursos = `${process.env.API_URL}/cursos/`;

  const [respGuitarra, respCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
  ]);

  const [guitarras, cursos] = await Promise.all([
    respGuitarra.json(),
    respCursos.json(),
  ]);

  return { props: { guitarras, cursos } };
}
