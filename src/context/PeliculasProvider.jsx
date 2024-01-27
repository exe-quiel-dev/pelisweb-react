/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";

const PeliculasContext = createContext();

const PeliculasProvider = ({ children }) => {

  const [peliculas, setPeliculas] = useState([]);
  const [modal, setModal] = useState(false);
  const [movie, setMovie] = useState({});
  const [pagina, setPagina] = useState(1);


  // let palabra = '';


  const cargarPeliculas = async () => {

    try {

      const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e3a54ecdde2ca1608ab2564fc0b25769&language=es-ES&page=${pagina}`);
      if (respuesta.status === 200) {
        const datos = await respuesta.json(); //metodo para acceder a la info json que devuelve el catch
        setPeliculas(datos.results);

        // datos.results.forEach(pelicula => {
        //   console.log(pelicula.title)
        // })
      } else if (respuesta.status === 401) {
        console.log('Error de API Key')
      }
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   cargarPeliculas()
  // }, [])

  useEffect(() => {
    cargarPeliculas()
  }, [pagina])
 
  const handleChangeModal = () => {
    setModal(!modal)
  }

  const handleSetMovie = pelicula => {
    setMovie(pelicula)
  }

  const paginaAnterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1)
    }
  }
  const paginaSiguiente = () => {
    setPagina(pagina + 1)
  }




  return (
    <PeliculasContext.Provider
      value={{
        peliculas,
        handleChangeModal,
        setModal,
        modal,
        handleSetMovie,
        movie,
        paginaAnterior,
        paginaSiguiente,
      }}
    >
      {children}
    </PeliculasContext.Provider>
  )
}

export {
  PeliculasProvider
}

export default PeliculasContext