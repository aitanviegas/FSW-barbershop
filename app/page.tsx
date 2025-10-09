// SERVER COMPONENTS
// Não consegue adicionar interatividade (eventos, hooks, etc)
// Não consegue usar state, useEffect, etc
// Não consegue usar browser APIs (localStorage, document, window, etc)
// Pode fazer chamadas diretas ao banco de dados
// Pode fazer chamadas a APIs internas e externas
// Pode ser assíncrono e usar await
// "use client" torna o componente em um Client Component

"use client"
import { useState } from "react"
import { Button } from "./_components/ui/button"

const Home = () => {
  const [] = useState()
  // return <h1 className="mb-5 bg-slate-300 py-2 text-red-500">Home Page</h1>
  return <Button>Clique!</Button>
}

export default Home
