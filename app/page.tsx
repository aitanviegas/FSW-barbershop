// SERVER COMPONENTS
// Não consegue adicionar interatividade (eventos, hooks, etc)
// Não consegue usar state, useEffect, etc
// Não consegue usar browser APIs (localStorage, document, window, etc)
// Pode fazer chamadas diretas ao banco de dados
// Pode fazer chamadas a APIs internas e externas
// Pode ser assíncrono e usar await
// "use client" torna o componente em um Client Component

// "use client"
// import { useState } from "react"
// import { Button } from "./_components/ui/button"
import { Search, SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2>Olá </h2>
        <p>Quinta-feira, 09 de outubro</p>
        <div className="mt-5 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende seu corte"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
