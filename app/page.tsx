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
import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"

// TODO: receber agendamentos do banco de dados

const Home = async () => {
  //chamar banco de dados
  const barbershops = await db.barbershop.findMany({})
  const popularbarbershops = await db.barbershop.findMany({
    orderBy: { name: "desc" },
  })
  // console.log({ quickSearchOptions })
  return (
    <div>
      <Header />
      <div className="p-5">
        {/* {TEXTO} */}
        <h2>Olá </h2>
        <p>Quinta-feira, 09 de outubro</p>

        {/* {BARRA DE BUSCA} */}
        <div className="mt-5 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* {BUSCA RÁPIDA} */}
        <div className="hide-scrollbar mt-5 flex items-center gap-3 overflow-x-scroll">
          {/* {OPÇÕES DE BUSCA RÁPIDA} */}
          {quickSearchOptions.map((item) => (
            <Button
              variant={"secondary"}
              className="whitespace-nowrap"
              key={item.title}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={16}
                height={16}
              />
              {item.title}
            </Button>
          ))}
        </div>
        {/* {IMAGEM} */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende seu corte"
          />
        </div>
        {/* {AGENDAMENTO} */}
        <BookingItem />
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="hide-scrollbar flex gap-4 overflow-auto">
          {barbershops.map((item) => (
            <BarbershopItem key={item.id} barbershop={item} />
          ))}
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="hide-scrollbar flex gap-4 overflow-auto">
          {popularbarbershops.map((item) => (
            <BarbershopItem key={item.id} barbershop={item} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              2025 Copyright <span className="font-bold">PropagaTech</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
