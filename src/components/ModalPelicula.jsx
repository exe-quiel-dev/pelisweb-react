// HOOKS
import usePeliculas from "../hooks/usePeliculas"
// COMPONENTS

const ModalPelicula = () => {
  const { movie, handleChangeModal } = usePeliculas();



  return (
    <div className="w-full">
      <div className="flex justify-end">
        <button
          onClick={() => { handleChangeModal() }}
          className="font-black text-red-600 text-2xl"
        >X</button>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <h2 className="text-center uppercase font-bold text-4xl text-gray-700">{movie.title}</h2>
        <div className="w-1/3">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster pelicula ${movie.title}`} className="py-6" />
        </div>
        <p className="text-center text-gray-700 py-2 text-lg">{movie.overview}</p>
      </div>
    </div>
  )
}

export default ModalPelicula