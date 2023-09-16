import { useContext } from 'react'
import {Link} from "react-router-dom"
import { ContextGlobal } from '../Components/utils/global.context'

const Navbar = () => {

  const { handleTheme, state } = useContext(ContextGlobal);

  return (
    <div className='navbar'>
      <h2><span style={{ color: 'red' }}>D</span>H Odonto</h2>
      <nav>
        <Link to="/home">Inicio</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Favoritos</Link>

        <button
          className='btn-theme'
          onClick={handleTheme}
          >
            {state.theme ? "☀" : "🌙"}
          </button>
      </nav>
    </div>
  )
}

export default Navbar