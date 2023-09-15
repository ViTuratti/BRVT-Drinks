"use client"

import { useEffect, useState } from "react";
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';

export default function CardDrink({ coquetel }) {
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const favorito = favoritos.find(f => f.idDrink === coquetel.idDrink);
    setFavorito(!!favorito);
  }, [coquetel.idDrink]);

  function favoritar() {
    setFavorito(true);
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos.push(coquetel);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  function desfavoritar() {
    setFavorito(false);
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const favoritosAtualizado = favoritos.filter(f => f.idDrink !== coquetel.idDrink);
    localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizado));
  }

  return (
    <div className="flex flex-col items-center justify-between gap-1 w-40 m-2 relative">
      {favorito ? (
        <HeartIcon
          className="h-6 w-6 text-rose-900 absolute top-1 right-2 cursor-pointer"
          onClick={desfavoritar}
        />
      ) : (
        <HeartIconOutline
          className="h-6 w-6 absolute top-1 right-2 cursor-pointer text-white hover:text-rose-900"
          onClick={favoritar}
        />
      )}

      <img className="rounded h-56" src={coquetel.strDrinkThumb} alt="Poster do Drink" />
      <span className="font-bold text-lg w-full line-clamp-1 text-center">{coquetel.strDrink}</span>
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-straw" viewBox="0 0 16 16">
    <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"/>
  </svg>

        <span className="text-slate-400">{coquetel.strAlcoholic}</span>
      </div>
      <a href="#" className="bg-pink-300 w-full rounded text-center py-1 hover:bg-rose-950">Detalhes</a>
    </div>
  );
}
