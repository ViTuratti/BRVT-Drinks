"use client"

import { useEffect, useState } from "react"
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'

export default function CardDrink({drink}){
   const [ favorito, setFavorito ] = useState(false)

   useEffect(() => {
     let favoritos = JSON.parse (localStorage.getItem("favoritos") ) || []
     const favorito = favoritos.find(f => f.id == drink.id)
     setFavorito(favorito)
    }, [])

   function favoritar(){
    setFavorito(true)
    let favoritos = JSON.parse (localStorage.getItem("favoritos") ) || []
    favoritos.push(drink)
    localStorage.setItem("favoritos",  JSON.stringify (favoritos))
  }
  
  function desfavoritar(){
    setFavorito(false)
    let favoritos = JSON.parse (localStorage.getItem("favoritos") ) || []
    const favoritosAtualizado = favoritos.filter(f => f.id !== drink.id)
    localStorage.setItem("favoritos",  JSON.stringify (favoritosAtualizado))
    }

    return(
        <div className="flex flex-col items-center justify-between gap-1 w-40 m-2 relative">
          {favorito?
            <HeartIcon 
              className="h-6 w-6 text-rose-900 absolute top-1 right-2 cursor-pointer"
              onClick={desfavoritar}
              />
              :
              <HeartIconOutline
                className="h-6 w-6 absolute top-1 right-2 cursor-pointer text-white hover:text-rose-900" 
                onClick={favoritar}
              />          
              }

        <img className="rounded h-56" src={drink.poster} alt="Poster do Drink" />
        <span className="font-bold text-lg w-full line-clamp-1 text-center">{drink.titulo}</span>
        <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-lime-400">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>

  
          <span className="text-slate-400">{drink.nota}</span>
        </div>
        <a href="#" className="bg-pink-300 w-full rounded text-center py-1 hover:bg-rose-950">Detalhes</a>
      </div>
    )   
}
