import BackgroundComponent from "@/components/Background";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import Logo from "../../../public/logo.webp"
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
          className="w-[65%] lg:w-[30%] lg:fixed lg:top-0 lg:left-20"
        />
      </div>
      <div className="fixed bottom-4 right-0 flex w-full justify-center space-x-10 z-10">
        <Link href={"https://www.instagram.com/megashowmais/"} target="_blank" rel="noopener noreferrer" className="text-9xl text-[#704896] hover:text-[#9476B2] hover:cursor-pointer transition duration-150">
          <FaSquareInstagram />
        </Link>
        <Link href={"https://wa.me/+5521997118909"} target="_blank" rel="noopener noreferrer" className="text-9xl text-[#704896] hover:text-[#9476B2] hover:cursor-pointer">
          <FaSquareWhatsapp />
        </Link>
      </div>
    </section>
  );
}
