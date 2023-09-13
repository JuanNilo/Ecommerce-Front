export default function CategoriasSelectorMenu(){
    const categorias = ["Vinos", "Destilados", "Ron", "Bebidas"]

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