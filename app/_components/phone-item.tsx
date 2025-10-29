"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const handleCopyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
  toast.success("Telefone copiado com sucesso!")
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  return (
    <div key={phone} className="flex justify-between">
      {/* ESQUERDA */}
      <div className="item-center flex gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      {/* DIREITA */}
      <Button
        size="sm"
        variant="outline"
        onClick={() => handleCopyToClipboard(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
