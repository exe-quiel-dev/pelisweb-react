// import { useState, useEffect } from "react";
import CardPelicula from "../src/components/CardPelicula";
import usePeliculas from "../src/hooks/usePeliculas"

const Index = () => {
  const { peliculas,  } = usePeliculas();
  // const [peliculas, setPeliculas] = useState([])


  // useEffect(() => {
  //   const cargarPeliculas = async () => {

  //     try {

  //       const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e3a54ecdde2ca1608ab2564fc0b25769&language=es-ES');
  //       if (respuesta.status === 200) {
  //         const datos = await respuesta.json(); //metodo para acceder a la info json que devuelve el catch
  //         setPeliculas(datos.results);

  //         // datos.results.forEach(pelicula => {
  //         //   console.log(pelicula.title)
  //         // })
  //       } else if (respuesta.status === 401) {
  //         console.log('Error de API Key')
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   cargarPeliculas()
  // }, [])

  // console.log(peliculas)
  // }
  return (
    <main>
      {/* {peliculaFiltrada ? (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <CardPelicula key={peliculaFiltrada[0].id} pelicula={peliculaFiltrada[0]} />
        </div>
      ) : ( */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {peliculas.map((pelicula) => (
            <CardPelicula key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      {/* )} */}
    </main>
  )
}

export default Index