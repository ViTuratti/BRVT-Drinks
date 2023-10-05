"use client"

import { serverLogout } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const {push} = useRouter()

    function logout(){
        serverLogout()
        push("/login")
      }

    return(
        <nav className="bg-rose-950 p-2 flex gap-4 items-end">
            <Link href="/">
                <h1 className="text-3xl text-zinc-100 font-bold uppercase">BRVT Drinks</h1>
            </Link>
            <Link href="/favoritos">Favoritos</Link>
            <button onClick={logout}>logout</button>
      </nav>
    )

}