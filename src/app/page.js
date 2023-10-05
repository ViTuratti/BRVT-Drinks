import CardDrink from "@/components/CardDrink";
import NavBar from "@/components/NavBar";
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
      <NavBar/>

      <Titulo>Cocktails</Titulo>
      <section className="flex flex-wrap gap-2">
        {coquetels.map((coquetel, index) => <CardDrink key={index} coquetel={coquetel} />)}
      </section>

      <Titulo>Tropicais</Titulo>
    </>
  );
}
