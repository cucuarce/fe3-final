import React from 'react'
import Form from '../Components/Form'
import Layout from './Layout'

const Contact = () => {
  return (
    <Layout>
      <main className='contact main'>
        <h2>¿Quieres saber más?</h2>
        <p>Envíanos tus preguntas y te contactaremos</p>
        <Form/>
      </main>
    </Layout>
  )
}

export default Contact