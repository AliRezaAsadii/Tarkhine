import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import ListTitle from './ListTitle';

export default function ListSection({children,btn,title}) {
return (
<section className="mt-3.5 md:mt-12">
    <div className="container">
        <div className="flex items-end justify-between">
            <ListTitle title={title}/>
            {btn?(<button className="complete__btn flex items-center border border-primary text-primary p-2 rounded gap-1 md:px-4 md:gap-2 text-2xs md:text-base md:font-estedadMedium hover:text-white hover:bg-primary transition-all duration-300">
                <MdOutlineShoppingCart className="w-4 md:w-6 h-4 md:h-6"/>تکمیل خرید
            </button>):''}
        </div>
        <div className="mt-3 grid grid-cols-1 xl:grid-cols-12 gap-3 md:gap-6 md:mt-6">
            {children}
        </div>
    </div>
</section>
)
}