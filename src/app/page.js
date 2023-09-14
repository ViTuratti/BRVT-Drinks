import CardDrink from "@/components/CardDrink";
import Titulo from "@/components/Titulo";

export default function Home() {

  const drinks= [
    {
      id: 1,
      titulo: "Albacora",
      nota: 45.00,
      poster: "https://cocktailteam.net/wp-content/uploads/2017/12/Cocktail-Albacora-scaled-1.jpg"
    },
    {
      id: 2,
      titulo: "Apple Martini",
      nota: 39.99,
      poster: "https://cocktailteam.net/wp-content/uploads/2017/12/Cocktail-Apple-Martini-1-scaled-1.jpg"
    },
    {
      id: 3,
      titulo: "Amore Mio",
      nota: 40.00,
      poster: "https://cocktailteam.net/wp-content/uploads/2017/12/Cocktail-Amore-Mio-scaled-1.jpg"
    },  
    {
      id: 4,
      titulo: "Amarula Chocolate Martini",
      nota: 37.50,
      poster: "https://cocktailteam.net/wp-content/uploads/2017/12/Cocktail-amarula-Chocolate-Martini-scaled-1.jpg"
    }
  ] 

  return ( //JSX
  <>
    <nav className="bg-rose-950 p-2 flex gap-3 items-end">
      <h1 className="text-4xl text-zinc-100 font-bold uppercase">BRVT DRINKS</h1>
      <ul>
        <li className="flex space-x-40">
          <a href="#" className="text-zinc-100" >Favoritos</a>
          <a href="#" className="text-zinc-100" >Alcoólicos</a>
          <a href="#" className="text-zinc-100" >Não alcoólicos</a>
          <a href="#" className="text-zinc-100" >Sobre</a>
        </li>
      </ul>
    </nav>
    <Titulo>Cocktails</Titulo>
    <section className="flex flex-wrap gap-2">
      {drinks.map( drink => <CardDrink drink={drink} />)}
    </section>

    <Titulo>Tropicais</Titulo>
    </>
  )
}