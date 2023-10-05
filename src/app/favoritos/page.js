"use client";

import CardDrink from "@/components/CardDrink";
import NavBar from "@/components/NavBar";
import Titulo from "@/components/Titulo";
import { useEffect, useState } from "react";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosData = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosData);
  }, []);

  const removeFavorito = (coquetel) => {
    const novosFavoritos = favoritos.filter((fav) => fav.idDrink !== coquetel.idDrink);
    setFavoritos(novosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };

  return (
    <>
      <NavBar/>

      <Titulo>Favoritos</Titulo>
      <section className="flex flex-wrap gap-2">
        {favoritos.map((coquetel, index) => (
          <CardDrink
            key={index}
            coquetel={coquetel}
            favorito={true}
            removeFavorito={() => removeFavorito(coquetel)}
          />
        ))}
      </section>
    </>
  );
}
