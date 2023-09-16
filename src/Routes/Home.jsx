import { useState , useEffect, useContext } from 'react'
import Card from '../Components/Card'
import Layout from './Layout'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {

  const [dentist, setDentist] = useState(true)
  const { getUser, handleSetUsers, state } = useContext(ContextGlobal);

  useEffect(() => {
    getUser().then((datos) => {
      handleSetUsers(datos);
      setDentist(false);
    });
  }, [])
  
  return (
    <Layout>
      <main className="home" >
        <h1>Inicio</h1>
        <div className='card-grid'>
          {!dentist && state.allDentist.map((item) => (<Card key={item.id} {...item} />))}
        </div>
      </main>
    </Layout>
  )
}

export default Home