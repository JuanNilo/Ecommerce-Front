'use client'

import { useState } from "react";
import { BiStore, BiSolidCategoryAlt, BiSolidOffer } from "react-icons/bi";
import CategoriasSelectorMenu from "./componentes-home/Categorias-Selector";
import SucursalSelctorMenu from "./componentes-home/Sucursal-Selector";

export default function SideBar(){
    const estilo = "bg-[#D9D9D9] rounded-[25px] w-[85%] font-bold my-4 p-2 mx-auto shadow shadow-gray-500  cursor-pointer hover:bg-[#E8E8E8]";

    const [categoriaSelector, setCategoriaSelector] = useState(false);
    const [sucursalSelector, setSucursalSelector] = useState(false)

    const handleCategoriaSelector = () => {
        setSucursalSelector(false);
        setCategoriaSelector(!categoriaSelector);
    }

    const handleSucursalSelector = () => {
        setCategoriaSelector(false)   
        setSucursalSelector(!sucursalSelector); 
    }

    return(
        
        <div className=" mt-12 flex-wrap  ">
            <div className={`${estilo} flex items-center justify-center gap-2`}>
                <BiSolidOffer size={30} />
                <h1>Ofertas</h1>
            </div>
            <div className={`${estilo}`} onClick={handleCategoriaSelector}>
                <div className="flex items-center justify-center gap-2">
                    <BiSolidCategoryAlt size={30}/>
                    <h1>Categorias</h1>
                </div>
                {categoriaSelector && <CategoriasSelectorMenu/>}
            </div>
            <div className={`${estilo}`}
                onClick={handleSucursalSelector}>
                    <div className="flex items-center justify-center gap-2">
                        <BiStore size={30}/>
                        <h1>Sucursales</h1>
                    </div>
                {sucursalSelector && <SucursalSelctorMenu/>}
            </div>
        </div>
    )
}