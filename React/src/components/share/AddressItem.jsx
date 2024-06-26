import React from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
export default function AddressItem(props) {
return (
<div className={`border rounded p-4 flex flex-col gap-2 bg-gray-100 xl:w-80 ${props.active?'border-primary':'border-gray-400'}`}>
    {/* top wrapper */}
    <div className="flex items-start justify-between gap-3 ">
        {/* address text */}
        <p className="text-2xs md:text-sm">{props.caption}</p>
        {/* edit address */}
        <button><BiEditAlt className="w-4 md:w-6 h-4 md:h-6"/></button>
        {/* delete address */}
        <button><IoTrashOutline className="w-4 md:w-6 h-4 md:h-6"/></button>
    </div>
    {/* bottom wrapper */}
    <div className="flex items-center justify-between text-2xs md:text-sm text-gray-700">
        {/* name address */}
        <span>{props.name}</span>
        {/* user name */}
        <span>{props.user}</span>
        {/* phone */}
        <span className="md:text-xs">{props.phone}</span>
    </div>
</div>
)
}