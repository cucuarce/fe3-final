import { useState } from "react";

const Form = () => {
  
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensajeError, setMensajeError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  const validarNombre = (nombre) => {

    const sinEspacio = nombre.trim();

    if (sinEspacio.length > 5) {
        return true;
    } else {
        return false;
    }
  };

  const validarEmail = (email) => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const esNombreValido = validarNombre(nombre);
    const esEmailValido = validarEmail(email);

    if (!esNombreValido || !esEmailValido) {
        setMensajeError('Por favor verifique su información nuevamente.');
        setMensajeExito('');
    } else {
        setMensajeError('');
        setMensajeExito(`Gracias ${nombre}, te contactaremos cuanto antes vía mail.`);
        setNombre('')
        setEmail('')
    }

}

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        >
        <div className="div-input">
          <input
            type='text'
            placeholder='Ingresar nombre'
            value={nombre}
            onChange={e=>setNombre(e.target.value)}
            />
        </div>

        <div className="div-input">
          <input
            type='text'
            placeholder='Ingresar email'
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
        </div>
        <div className="div-input">
          <input
            type='submit'
            value="ENVIAR"
            />
        </div>   

      </form>

      {mensajeError && <p>{mensajeError}</p>}
      {mensajeExito && <p>{mensajeExito}</p>}
      
    </div>
  );
};

export default Form;