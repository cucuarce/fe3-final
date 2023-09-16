import React, { useContext } from "react";
import Card from "../Components/Card";
import Layout from "./Layout";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const { state } = useContext(ContextGlobal)

  return (
    <Layout>
      <main className="main">
        <h1>Dentistas Favoritos</h1>
        <div className="card-grid">
          {state.favs.length === 0 ? (
            <p>Agrega tus dentistas favoritos</p>
          ) : (
            state.favs.map((favorito) => (
              <Card key={favorito.id} {...favorito} />
            ))
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Favs;
