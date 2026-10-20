'use client'

import Link from "next/link";
import Image from "next/image";
import CartBtn from "@/components/CartBtn";
import posthog from "posthog-js";

interface Props {
    id: number,
    title : string,
    image : string,
    price : number,
    category : string,
    slug : string,
}

const ProductCard = ({id, title, image, category, price, slug}: Props) => {
    return (
        <Link
            href="/products/${slug}"
            id="product-card"
            onClick={() => {
                if (process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST) {
                    posthog.capture("product_selected", {
                        product_id: id,
                        category,
                        price,
                    });
                    posthog.logger.info("featured product selected", {
                        product_id: id,
                        category,
                        price,
                    });
                }
            }}
        >
            <Image src={image} alt={title} width={700} height={300} className="poster"/>
                <div className="price-stock px-2">
                    <p className="title">{title}</p>
                    <p>{category}</p>
                </div>
            <div className="flex flex-row justify-between  text-2xl text-gold px-2 my-3">
                <CartBtn productId={id} category={category} price={price} />
                <p className="text-xl text-gold">${price}</p>
            </div>
        </Link>
    )
}
export default ProductCard
