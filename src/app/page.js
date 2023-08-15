
export default function Home() {
  return ( //JSX
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
  )
}