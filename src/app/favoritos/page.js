"use client";

import CardDrink from "@/components/CardDrink";
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
      <nav className="bg-rose-950 p-2 flex gap-4 items-end">
        <h1 className="text-3xl text-zinc-100 font-bold uppercase">Favoritos</h1>
        <a href="/">Cocktails</a>
      </nav>

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
