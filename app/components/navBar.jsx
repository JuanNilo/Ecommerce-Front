import Link from "next/link";
import Image from "next/image";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
export default function Navbar() {
    const styleItem = 'bg-white h-[60px] w-[60px] rounded-full flex  cursor-pointer mx-2'

  return (
    <nav className=" bg-[#073389] text-white w-[100%] h-[15vh] flex items-center px-4 ">
        <Link href={'/'}>
            <h1 id="store-name" className=" text-4xl flex-none">
                NAME STORE
            </h1>
        </Link>
      {/* Buscador de productos */}
      <section className="grow  justify-start hidden md:block">
        <div className=" bg-[#D9D9D9] rounded-full w-[35%] ml-10 flex items-center">
          <input
            className="p-2 bg-[#D9D9D9] border-none  rounded-full w-[90%]"
            type="text"
            name=""
            id=""
            placeholder="Buscar productos..."
          />
          <BsSearch className=" text-black mx-auto" />
        </div>
      </section>
      {/* Buscador mobile */}
     
      {/* Lado derecho navBar */}
      <div className="flex">
      <section>
        <div className="bg-white rounded-full p-4 block mx-2 md:hidden">
          <BsSearch className=" text-black mx-auto" size={25} />
        </div>
      </section>
        <div className={`${styleItem}`}>
            <BsCart2 className="text-black m-auto" size={40}/>
        </div>
        <div>
          {/* <Image src="/images/icon.svg" alt="User icon" className="mx-auto" width={50} height={50}/>  */}
          <Link href={'/user/login'} className={` ${styleItem}`}>
            <AiOutlineUser className="text-black m-auto" size={45} />
          </Link>
        </div>
        
      </div>
    </nav>
  );
}
