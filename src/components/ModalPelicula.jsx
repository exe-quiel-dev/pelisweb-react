// HOOKS
import usePeliculas from "../hooks/usePeliculas"
// COMPONENTS

const ModalPelicula = () => {
  const { movie, handleChangeModal } = usePeliculas();



  return (
    <div className="w-full max-h-screen">
      <div className="flex justify-end">
        <button
          onClick={() => { handleChangeModal() }}
          className="font-black text-red-600 text-2xl"
        >X</button>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center p-0 lg:p-6">
        <h2 className="text-center uppercase font-bold text-4xl text-gray-700">{movie.title}</h2>
        <div className="w-full flex flex-col lg:flex-row items-center">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster pelicula ${movie.title}`} className="py-6" />
          <p className="text-start text-gray-700 p-0 md:p-4 text-sm md:text-lg">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default ModalPelicula