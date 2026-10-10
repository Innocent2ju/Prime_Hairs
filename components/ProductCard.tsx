import Link from "next/link";
import Image from "next/image";
import CartBtn from "@/components/CartBtn";

interface Props {
    title : string,
    image : string,
    price : number,
    category : string,
    slug : string,
}

const ProductCard = ({title, image, category, price}: Props) => {
    return (
        <Link href="/products/${slug}" id="product-card">
            <Image src={image} alt={title} width={700} height={300} className="poster"/>
                <div className="price-stock px-2">
                    <p className="title">{title}</p>
                    <p>{category}</p>
                </div>
            <div className="flex flex-row justify-between  text-2xl text-gold px-2 my-3">
                <CartBtn />
                <p className="text-xl text-gold">${price}</p>
            </div>
        </Link>
    )
}
export default ProductCard
