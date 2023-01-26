import './App.css';
import PageWrapper from './PageWrapper';
import Pelicula from './Pelicula';
import peliculasJson from './peliculas.json';

function App() {

  let peliculas = peliculasJson;

  return (
    <PageWrapper>

      {peliculas.map(pelicula => {
        return <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director}
          actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
          img={pelicula.img} descripcion={pelicula.descripcion}>
        </Pelicula>
      })}

    </PageWrapper>
  );
}

export default App;
