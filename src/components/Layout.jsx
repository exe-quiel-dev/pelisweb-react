import { Outlet, Link } from "react-router-dom"
import Modal from "react-modal"

// COMPONENTS
import ModalPelicula from "./ModalPelicula";
// HOOKS
import usePeliculas from "../hooks/usePeliculas";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    maxheight: '85%'
  },
};

Modal.setAppElement('#root');

function Layout() {
  const { modal, paginaAnterior, paginaSiguiente } = usePeliculas();

  return (
    <>
      <header className="bg-transparent container mx-auto py-4">
        <nav className="flex items-center justify-between px-4">
          <Link><h1 className="text-6xl font-black text-yellow-400 cursor-pointer">Pelis Web</h1></Link>
          <div className="flex items-center justify-center gap-6 text-white w-1/3">
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="py-6">
        <div className="flex items-center justify-center container mx-auto gap-6">
          <button
            onClick={() => {
              paginaAnterior()
            }}
            className="text-gray-400 uppercase font-bold p-2 hover:bg-yellow-400 transition-colors rounded-full hover:text-white"
          >Anterior</button>
          <button
            onClick={() => {
              paginaSiguiente()
            }}
            className="text-gray-400 uppercase font-bold p-2 hover:bg-yellow-400 transition-colors rounded-full hover:text-white"
          >Siguiente</button>
        </div>
      </footer>
      {modal && (
        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <ModalPelicula />
        </Modal>
      )}
    </>
  )
}

export default Layout