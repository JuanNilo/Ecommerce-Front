

export default function SucursalSelctorMenu () {

    const categorias = ["La Serena", "Coquimbo", "Ovalle", "Vicuña"]

    return(
        <div className="gap-4  w-[100%] h-[100px]">
            {categorias.map(categoria => (
                <div className="m-0 w-[100%] hover:bg-zinc-300">
                    {categoria}
                </div>
            ))}
        </div>
    )
}