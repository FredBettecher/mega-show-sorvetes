import BackgroundComponent from "@/components/Background";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import Logo from "../../../public/logo.svg"
import Text from "../../../public/images/under-construction/text.png"
import Link from "next/link";

export default function UnderConstruction() {
  const images = [
    "/images/under-construction/bg1.webp",
    "/images/under-construction/bg2.webp",
    "/images/under-construction/bg3.webp",
  ];

  return (
    <section className="relative">
      <div className="absolute top-0 left-0">
        <BackgroundComponent images={images} />
      </div>
      <div className="absolute top-0 left-0 w-screen h-dvh flex items-start md:items-center md:justify-center overflow-hidden">
        <Image
          src={Logo}
          alt="Mega Show"
          className="md:w-[80%] md:mt-2 mt-32"
        />
      </div>
      <div className="absolute -top-20 md:top-0 left-0 w-full md:w-fit h-dvh flex items-center justify-center overflow-hidden">
        <Image
          src={Text}
          alt="Refrescância que marca momentos"
          className="md:w-[80%] md:mr-12 md:mt-2 mt-72"
        />
      </div>
      <div className="fixed bottom-4 right-4 flex flex-col space-y-8 z-10 w-fit">
        <Link href={"https://www.instagram.com/megashowmais/"} target="_blank" rel="noopener noreferrer" className="text-7xl text-[#E4202C] hover:text-[#EB6272] hover:cursor-pointer transition duration-150">
          <FaSquareInstagram />
        </Link>
        <Link href={"https://wa.me/+5521997118909"} target="_blank" rel="noopener noreferrer" className="text-7xl text-[#5EB030] hover:text-[#92C67C] hover:cursor-pointer">
          <FaSquareWhatsapp />
        </Link>
      </div>
    </section>
  );
}
