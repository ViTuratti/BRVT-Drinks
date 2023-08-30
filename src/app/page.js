import CardDrink from "@/components/CardDrink";
import Titulo from "@/components/Titulo";

export default function Home() {

  const filmes= [
    {
      titulo: "Sobrenatural: A Porta Vermelha",
      nota: 9.5,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6lp4uDxLqLEw1CzW1SUOYJ3zdKD.jpg"
    },
    {
      titulo: "Invocação do Mal 3: A Ordem do Demônio",
      nota: 9.8,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tLmaOXT9rMb17ISQDURKQIu3Okk.jpg"
    },
    {
      titulo: "O Ritual",
      nota: 7.5,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yFRTz69BvtqZa7VjkyNGehjVb6p.jpg"
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