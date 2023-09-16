import { useState, useContext, useEffect } from 'react'
import Layout from './Layout'
import { ContextGlobal } from '../Components/utils/global.context';
import { useParams } from 'react-router-dom';

const Detail = () => {
 
  const [dentist, setDentist] = useState(true)
  const { getUserById, handleDentist, state } = useContext(ContextGlobal);
  const {id} = useParams()

  useEffect(() => {
    getUserById(id).then((datos) => {
      handleDentist(datos);
      setDentist(false);
    });
  }, [])

  return (    
    <Layout>
      <main className='main contact'>
        <h1>Dentista {state.dentist.name}</h1>
          
        {!dentist && (<table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state.dentist.name}</td>
              <td>{state.dentist.email}</td>
              <td>{state.dentist.phone}</td>
              <td>{state.dentist.website}</td>
            </tr>
          </tbody>
        </table>
        )}
      </main>          
    </Layout>
  )
}

export default Detail