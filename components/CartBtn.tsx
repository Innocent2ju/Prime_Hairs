'use client'
import Image from "next/image";
const CartBtn = () => {
    return (
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
            className="group relative flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-black/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all duration-500 ease-out hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95"
        >
            {/* Animated Icon with Slight Rotation & Pulse */}
            <Image
                src="/icons/shopping.svg"
                alt="Add to Cart Icon"
                width={20}
                height={20}
                className="h-5 w-5 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12"
            />

            {/* Smooth Animated Text Reveal */}
            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 ease-out group-hover:max-w-xs group-hover:opacity-100">
    Add to Cart
  </span>
        </button>
    )
}
export default CartBtn
