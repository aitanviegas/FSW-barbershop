import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { AvatarImage } from "@radix-ui/react-avatar"
import { Avatar } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" alt="Logo FSW Barber" height={18} width={120} />

        <Sheet>
          {/* Conteúdo do menu lateral pode ser adicionado aqui */}
          <SheetTrigger asChild>
            <Button size={"icon"} variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto" side="right">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="border-b border-solid py-5"></div>

            <div className="flex items-center gap-3 border-b border-solid p-5">
              <Avatar>
                <AvatarImage
                  src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
                  alt="User Avatar"
                />
              </Avatar>
              <div>
                <p className="font-bold">João Silva</p>
                <p className="text-xs"> joao@silva.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-b border-solid p-5">
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/">
                    <HomeIcon />
                    Início
                  </Link>
                </Button>
              </SheetClose>

              <Button variant="ghost" className="w-full justify-start">
                <CalendarIcon />
                Agendamento
              </Button>
            </div>

            <div className="flex flex-col gap-3 border-b border-solid p-5">
              {quickSearchOptions.map((item) => (
                <Button
                  key={item.title}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <Image
                    height={18}
                    width={18}
                    src={item.imageUrl}
                    alt={item.title}
                    className="mr-2"
                  />
                  {item.title}
                </Button>
              ))}
            </div>

            <div className="flex flex-col gap-3 p-5">
              <Button variant="ghost" className="w-full justify-start">
                <LogOutIcon className="mr-2" size={18} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
