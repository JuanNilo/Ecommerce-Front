/* eslint-disable @next/next/no-img-element */


export default function ProductCard({nombre, imagen, stock, precio}){

    return(
        <div className="w-[100%] h-[100%] bg-red-500">
            <div className="h-[15%] text-center font-bold">
                <h1>{nombre}</h1>

            </div>
            <div className="bg-white h-[70%]">
                <img src={imagen} alt={nombre}/>
            </div>
            <p>stock:{stock}</p>
            <p>precio:{precio}</p>
        </div>
    )
}