/* eslint-disable react/prop-types */
import usePeliculas from "../hooks/usePeliculas";

function CardPelicula({ pelicula }) {
  const { handleChangeModal, handleSetMovie } = usePeliculas();
  const { title, poster_path } = pelicula;


  return (
    <div className="flex flex-col items-center justify-center">
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`Poster pelicula ${title}`} className="cursor-pointer mx-auto hover:opacity-50 hover:border hover:border-white rounded-md h-3/4"
        onClick={() => {
          handleChangeModal()
          handleSetMovie(pelicula)
        }} />
      <button
        onClick={() => {
          handleChangeModal()
          handleSetMovie(pelicula)
        }}
        className="font-bold p-2 bg-gray-400 mt-4 rounded hover:bg-yellow-400 transition-colors cursor-pointer text-gray-600 hover:text-white"
      >Ver Resumen</button>
      <h2 className="font-black text-white text-2xl uppercase text-center h-1/4 pt-4">{title}</h2>
    </div>
  )
}

export default CardPelicula