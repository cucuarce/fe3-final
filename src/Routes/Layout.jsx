import { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ContextGlobal } from '../Components/utils/global.context';

const Layout = ({children}) => {

  const { state } = useContext(ContextGlobal);

  return (
    <div className={`${state.theme ? 'dark' : ''}`}>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout