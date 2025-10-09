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
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar } from "./_components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"

const Home = () => {
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
        <Card className="mt-6">
          <CardContent className="flex justify-between py-0">
            {/* {DIV DA ESQUERDA} */}
            <div className="flex flex-col gap-2 py-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="text-lg font-medium">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                    alt="Avatar do barbeiro"
                  />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/* {DIV DA DIREITA} */}
            <div className="ml-auto flex flex-col items-center justify-center gap-2 border-l-2 border-solid px-5">
              <p className="text-sm text-muted-foreground">Agosto</p>
              <p className="text-2xl font-bold leading-none">15</p>
              <p className="text-sm text-muted-foreground">08:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
