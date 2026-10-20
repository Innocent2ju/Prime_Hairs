'use client'
import Image from 'next/image'
import posthog from "posthog-js";

const ShopBtn = () => {
    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => {
            if (process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST) {
                posthog.capture("explore_products_clicked");
                posthog.logger.info("catalog exploration started", {
                    surface: "homepage",
                });
            }
            console.log("GO Shopping!");
        }}>
            <a href="#products">
                Explore Products
                <Image src="/icons/arrow-down.svg" width={20} height={20} alt="Start Shopping arrow icon"/>
            </a>
        </button>
    )
}
export default ShopBtn
