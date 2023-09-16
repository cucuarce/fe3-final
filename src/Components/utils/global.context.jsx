import { useState, useReducer, useEffect } from "react";
import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const [theme, setTheme] = useState(false)
  const [user, setUser] = useState();

  function reducer(state, action) {
    switch (action.type) {
      case "setAllDestist":
        return {
          ...state,
          allDentist: action.payload,
        };
      case "setDentist":
        return {
          ...state,
          dentist: action.payload,
        };
      case "setTheme":
        return {
          ...state,
          theme: !state.theme,
        };
      case "setFavs":
        return {
          ...state,
          favs: action.payload,
        };

      default:
        return state;
    }
  }

  const initialValue = {
    allDentist: {},
    dentist: {},
    theme: false,
    favs: [] //A
  };
  
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleSetUsers = (datos) => {
    dispatch({ type: "setAllDestist", payload: datos });
  };
  
  const handleDentist = (datos) => {
    dispatch({ type: "setDentist", payload: datos });
  };

  const handleTheme = () => {
    dispatch({ type: "setTheme" });
  };

  const handleFavs = (datos) => {
    dispatch({ type: "setFavs", payload: datos });
  };

  const getUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  };

  const getUserById = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    localStorage.setItem('dentist-key', JSON.stringify(state.favs))
  }, [state.favs])

  return (
    <ContextGlobal.Provider value={{
      user,
      setUser,
      state,
      handleDentist,
      handleSetUsers,
      handleTheme,
      handleFavs,
      getUser,
      getUserById
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};
