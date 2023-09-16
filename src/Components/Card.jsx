import { useContext } from "react";
import {Link} from "react-router-dom"
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const { state, handleFavs } = useContext(ContextGlobal)

  const addFav = ()=>{
    
    if(state.favs.some((fav) => fav.id === id)) {
      const newFavs = state.favs.filter((fav) => fav.id !== id)
      handleFavs(newFavs)
      alert(`Has eliminado a ${name} de favoritos`);
    } else {
      const newFav = {
        id,
        name,
        username,
      }
      const newArr = [...state.favs, newFav]
      handleFavs(newArr)
      alert(`Has añadido a ${name} a favoritos`);
    }

  }

  return (
    <div className="card">
        
        <img src={process.env.PUBLIC_URL + '/images/doctor.jpg'} alt="dentist" className="img"/>
        <Link key={id} to={`/dentist/${id}`}><h3>{name}</h3></Link>
        <p>{username}</p>        
        <button onClick={addFav} className="favButton">★</button>

    </div>
  );
};

export default Card