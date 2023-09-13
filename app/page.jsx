import Image from "next/image";
import SideBar from "./components/componentes-home/Sidebar";
import Slider from "./components/componentes-home/Slider";
import Flayer from "./components/componentes-home/Flayer";

export default function Home() {
  return (
    <div className=" text-center flex">
      <div className=" h-[100vh] w-[20%] border-r-2 border-white">
        <SideBar />
      </div>
      <div className="h-[100vh] w-full">
        <div className=" h-[50vh] flex px-[10%] overflow-hidden">
          <Slider/>
          <Flayer/>
        </div>
        <div className="bg-red-900 h-[50vh]">Rojo</div>
      </div>
      
    </div>
  );
}
