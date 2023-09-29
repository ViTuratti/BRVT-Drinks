import CardDrink from "@/components/CardDrink";
import Titulo from "@/components/Titulo";

async function carregarDados() {
  const coquetels = [];

  for (let i = 0; i < 9; i++) {
    const timestamp = new Date().getTime(); // Obtém um carimbo de data e hora aleatório
    const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php?timestamp=${timestamp}`;
    const response = await fetch(url);
    const json = await response.json();
    coquetels.push(json.drinks[0]);
  }

  return coquetels;
}

export default async function Home() {
  const coquetels = await carregarDados();

  return (
    <>
      <nav className="bg-rose-950 p-2 flex gap-3 items-end">
        <h1 className="text-4xl text-zinc-100 font-bold uppercase">BRVT DRINKS</h1>
        <a href="/favoritos" className="text-zinc-100">Favoritos</a>
      </nav>

      <Titulo>Cocktails</Titulo>
      <section className="flex flex-wrap gap-2">
        {coquetels.map((coquetel, index) => <CardDrink key={index} coquetel={coquetel} />)}
      </section>

      <Titulo>Tropicais</Titulo>
    </>
  );
}
