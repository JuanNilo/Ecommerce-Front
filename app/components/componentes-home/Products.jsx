/* eslint-disable @next/next/no-img-element */
import {products} from '../../mocks/products.json'
import ProductCard from './Product-Card'

export default function Products(){
    return(
        <main>
            <ul className='flex flex-row w-[100%] h-[100%]'>
                {products.map(product => (
                    <li key={product.id} className='w-[30%]'>
                        <ProductCard nombre={product.nombre} imagen={product.imagen} precio={product.precio} stock={product.stock}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}