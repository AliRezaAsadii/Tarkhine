import React, { useState } from 'react'
import { GoChevronRight } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiCheckSquare } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { TbAlertHexagon } from "react-icons/tb";
import { GoChevronLeft } from "react-icons/go";
import { LiaUserSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import Empty from '../share/Empty';
import Overlay from '../share/Overlay'
import { NavLink } from 'react-router-dom';
import OrderItem from './OrderItem';
export default function Basket() {
    const [orderArray,setOrderArray]=useState([{id:1, title:'پاستا سبزیجات', resepi:'پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده', img:'src/assets/images/menu/food11.webp', star:'4', price:'۱۷۵٬۰۰۰', offer:'۱۴۰٬۰۰۰', discount:'۲۰', count:'۱',}]);
    const [isLogin]=useState(true);
    const [showDeleteModal,setShowDeleteModal]=useState(false);
    const clearAllOrder=()=>{
        setOrderArray([]);
        setShowDeleteModal(false)
    }
    const closeDeleteModal=()=>{
        setShowDeleteModal(false);
    }
    const openDeleteModal=()=>{
        setShowDeleteModal(true);
    }
return (
<>
<div className='container'>
    <div className="flex items-center justify-between md:justify-center mt-6 md:mt-10">
                {/* back btn */}
                <NavLink to='/menu' className="md:hidden">
                    <GoChevronRight className="w-4 h-4"/>
                </NavLink>
                {/* state wrapper */}
                <div className="flex-center gap-2  text-sm md:w-1/2 ">
                    {/* state item */}
                    <span className="state__item state__item--active flex items-center gap-1">
                        <MdOutlineShoppingCart className="w-6 h-6 hidden md:block"/>سبد خرید
                    </span>
                    {/* state line */}
                    <div className="hidden md:block flex-auto h-px bg-gray-400 border-dashed border-gray-400"></div>
                    {/* state item */}
                    <span className="state__item flex items-center gap-1">
                        <PiCheckSquare className="w-6 h-6 hidden md:block"/>تکمیل اطلاعات
                    </span>
                    {/* state line */}
                    <div className="hidden md:block flex-auto h-px bg-gray-400 border-dashed border-gray-400"></div>
                    {/* state item */}
                    <span className="state__item flex items-center gap-1">
                        <IoWalletOutline className="w-6 h-6 hidden md:block"/>پرداخت
                    </span>
                </div>
                {/* trash btn */}
                <button className="md:hidden" onClick={openDeleteModal}>
                    <IoTrashOutline className="w-4 h-4"/>
                </button>
    </div>
    <section className="my-6 md:my-10">
        {orderArray.length
        ?<div className="basket__wrapper grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-6 p-6 md:p-0 rounded-lg md:rounded-none border md:border-none border-gray-400 overflow-hidden">
        {/* food wrapper */}
        <div dir="ltr" className="col-span-1 lg:col-span-7 h-44 lg:h-[554px] overflow-y-auto flex flex-col md:p-6 md:gap-4 md:border md:border-gray-400 md:rounded-lg overflow-hidden">
            {orderArray.map((item,index)=><OrderItem key={index} {...item}/>)}
        </div>
        {/* detail wrapper */}
        <div className="col-span-1 lg:col-span-5 flex lg:h-72 flex-col md:p-6 md:rounded-lg md:border md:border-gray-400 overflow-hidden">
            {/* title wrapper */}
            <div className="hidden md:flex items-center justify-between pb-3 md:border-b md:border-gray-400">
                {/* title */}
                <h4>سبد خرید(<span className="text-sm">{orderArray.length}</span>)</h4>
                {/* delete all basket btn */}
                <button className="text-gray-800" onClick={openDeleteModal}>
                    <IoTrashOutline className="w-6 h-6"/>
                </button>
            </div>
            {/* discount wrapper */}
            <div className="flex items-center justify-between py-3 border-y md:border-t-0 md:border-b border-gray-400">
                {/* title */}
                <h5 className="text-sm">تخفیف محصولات</h5>
                {/* discount price */}
                <span className="text-gray-700 text-sm">۶۳٬۰۰۰ تومان</span>
            </div>
            {/* shipping wrapper */}
            <div className="flex flex-col gap-2 py-3 border-b border-gray-400">
                {/* top wrapper */}
                <div className="flex items-center justify-between">
                    {/* title */}
                    <h5 className="text-sm">هزینه ارسال</h5>
                    {/* shipping price */}
                    <span className="text-gray-700 text-sm">۰ تومان</span>
                </div>
                {/* warning */}
                <p className="text-warning text-2xs flex items-center gap-2">
                    <TbAlertHexagon className="md:w-6 w-4 md:h-6 h-4"/>هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</p>
            </div>
            {/* price wrapper */}
            <div className="flex items-center justify-between py-3 ">
                {/* title */}
                <h5 className="text-sm">مبلغ قابل پرداخت</h5>
                {/* sum of price */}
                <span className="text-primary text-sm">۵۴۲٬۰۰۰ تومان</span>
            </div>
                {isLogin
                ?<NavLink to='/buy/complete' className="w-full text-white bg-primary flex-center gap-1 md:gap-2 rounded p-2 md:px-4 text-xs md:text-base md:font-estedadMedium">تکمیل اطلاعات
                    <GoChevronLeft className="w-4 md:w-6 h-4 md:h-6"/>
                </NavLink>
                :<NavLink to='' className="w-full text-white bg-primary flex-center gap-1 md:gap-2 rounded p-2 md:px-4 text-xs md:text-base md:font-estedadMedium">
                    <LiaUserSolid className="w-4 md:w-6 h-4 md:h-6"/>ورود/ثبت‌نام
                </NavLink>
                }
        </div>
        </div>
        :<Empty caption='شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!' href='/menu' btn='منوی رستوران'/>}
        {/* basket wrapper */}
    </section>
</div>
{showDeleteModal&&<Overlay onHide={closeDeleteModal}>
    <div className="deleteAll__modal fixed overflow-hidden rounded-lg bg-white w-11/12 md:w-5/12 h-48 md:h-56 inset-0 m-auto z-30">
        {/* top wrapper */}
        <div className="bg-gray-100 flex items-center justify-between py-4 px-6 text-sm font-estedadMedium md:text-2xl md:font-estedadSemiBold">
            <h3 className="mx-auto">حذف محصولات</h3>
            <button onClick={closeDeleteModal} className="close__deleteAll--modal text-gray-700">
                <IoMdClose className="w-6 h-6"/>
            </button>
        </div>
        {/* caption */}
        <p className="mt-3 md:mt-8 text-xs md:text-base text-center">همه محصولات سبد خرید شما حذف شود؟</p>
        {/* btn wrapper */}
        <div className="mt-8 flex-center gap-4 md:gap-5 px-16">
            {/* back btn */}
            <button onClick={closeDeleteModal} className="back__btn border border-primary rounded flex-center p-2 text-primary text-xs md:px-4 md:text-base md:font-estedadMedium flex-1">بازگشت</button>
            {/* delete btn */}
            <button onClick={clearAllOrder} className="delete__btn bg-error-200 rounded flex-center p-2 text-error text-xs md:px-4 md:text-base md:font-estedadMedium flex-1">حذف</button>
        </div>
    </div>
</Overlay>}
</>
)
}