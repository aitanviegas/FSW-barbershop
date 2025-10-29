import ServiceItem from "@/app/_components/service-item"
import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import PhoneItem from "@/app/_components/phone-item"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

// CASO ID SEJA NULO

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  //chamar banco de dados se precisar
  const barbershop = await db.barbershop.findUnique({
    where: { id: params.id },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  //   console.log(barbershop.services)

  return (
    <div>
      {/* {IMAGEM} */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop?.name ?? "Barbershop"}
          src={barbershop?.imageUrl ?? "/default-barbershop.jpg"}
          fill
          className="object-cover"
        />
        <Button
          variant="secondary"
          className="absolute left-4 top-4"
          size="icon"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          variant="secondary"
          className="absolute right-4 top-4"
          size="icon"
        >
          <MenuIcon />
        </Button>
      </div>
      {/* {TÍTULO} */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mt-3 flex items-center gap-1">
          <MapPinIcon size={18} className="text-primary" />
          <p className="text-sm font-semibold">{barbershop?.address}</p>
        </div>
        <div className="mt-3 flex items-center gap-1">
          <StarIcon size={18} className="fill-primary text-primary" />
          <p className="text-sm">5,0 (499 Avaliações)</p>
        </div>
      </div>
      {/* {DESCRIÇÃO0} */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-justify text-sm text-gray-300">
          {barbershop?.description}
        </p>
      </div>

      {/* {SERVIÇOS} */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
      {/* {CONTATO} */}
      <div className="space-y-3 p-5">
        {barbershop.phone.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
