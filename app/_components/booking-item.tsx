import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Avatar, AvatarImage } from "./ui/avatar"

const BookingItem = () => {
  return (
    <>
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>
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
    </>
  )
}

export default BookingItem
