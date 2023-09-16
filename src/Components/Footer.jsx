import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='dh'>
          <p>Powered by</p>
          <img className="img-dh" src={process.env.PUBLIC_URL + '/images/DH.png'} alt='DH-logo' />
        </div>
        <div className='iconos'>
          <img className="ico" src={process.env.PUBLIC_URL + '/images/ico-facebook.png'} alt="facebook" />
          <img className="ico" src={process.env.PUBLIC_URL + '/images/ico-instagram.png'} alt="instagram" />
          <img className="ico" src={process.env.PUBLIC_URL + '/images/ico-tiktok.png'} alt="tiktok" />
          <img className="ico" src={process.env.PUBLIC_URL + '/images/ico-whatsapp.png'} alt="whatsapp" />
        </div>
    </footer>
  )
}

export default Footer
