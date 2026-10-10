'use client'
import Image from 'next/image'
const ShopBtn = () => {
    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log("GO Shopping!")}>
            <a href="#products">
                Explore Products
                <Image src="/icons/arrow-down.svg" width={20} height={20} alt="Start Shopping arrow icon"/>
            </a>
        </button>
    )
}
export default ShopBtn
