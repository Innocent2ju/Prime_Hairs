import ShopBtn from "@/components/ShopBtn"
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/constants";
const Page = () => {
    return (
       <section>
            <h1 className="text-center">The Online Store for Raw Hair Wigs & Bundles</h1>
            <p className="text-center mt-5">Human hairs, extension bundles, wigs and hair products in one place !</p>

           <ShopBtn />

           <div className="mt-20 space-y-7">
               <h3>Featured Products</h3>

               <ul className="products-grid">
                   {products.map((product) =>
                   <li key={product.title} className='bg-[#1A1A1A] rounded-md '>
                       <ProductCard {...product} />
                   </li>
                   )}
               </ul>

           </div>

       </section>
    )
}
export default Page
