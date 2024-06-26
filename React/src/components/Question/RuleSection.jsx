import React from 'react'
import Header from '../share/Header'
import { NavLink } from 'react-router-dom'
import Accordion from './Accordion'
export default function RuleSection() {
  return (
<>
<Header title='قوانین ترخینه' background='bg-header-rule'/>
<div className="bg-gray-300">
    <div className="container">
        <div className="py-1.5 md:pt-4 flex items-center gap-4 md:gap-8 text-gray-700 text-xs md:text-xl">
            <NavLink to='/question'>سوالات متداول</NavLink>
            <NavLink to='/question/rules' className="state__question--active">قوانین ترخینه</NavLink>
            <NavLink to='/question/privacy'>حریم خصوصی</NavLink>
        </div>
    </div>
</div>
<div className="container mb-6 md:mb-12">
    <div className='transition-all duration-300 mt-3 md:mt-6 visible opacity-100 h-auto border border-gray-400 rounded overflow-hidden'>
        <Accordion id='1' question='حداقل سفارش' answer='حداقل سفارشات در رستوران‌های ترخینه، مبلغ ۵۰.۰۰۰ تومان است. برای ثبت، پردازش و ارسال سفارشات، باید حداقل، این مبلغ سفارش داده شود در غیر اینصورت سفارشات، ثبت نخواهد شد.'/>
        <Accordion id='2' question='فاصله تحویل' answer='ترخینه در ارسال سفارشات به نقاط دور محدودیت دارد و حداکثر فاصله از رستوران‌های زنجیره‌ای ترخینه برای ارسال کالا، ۶ کیلومتر است. لطفا قبل از ثبت سفارش، نزدیک‌ترین شعبه به محل ارسال را انتخاب کنید و از رعایت کردن حداکثر فاصله برای ارسال سفارشات اطمینان حاصل فرمایید.'/>
        <Accordion id='3' question='زمان تحویل' answer='جدول زمانی تخمینی تحویل در زمان ثبت سفارش به اطلاع شما خواهد رسید. این ممکن است تحت تأثیر عوامل زیادی مانند ترافیک، آب و هوا، دوره‌های شلوغ رستوران و غیره باشد، بنابراین در صورت تأخیر لطفا صبور باشید.'/>
        <Accordion id='4' question='گزینه‌های پرداخت' answer='ما گزینه‌های پرداخت مختلفی را می پذیریم، از جمله پرداخت اینترنتی، کارت‌های اعتباری یا پول نقد. لطفاً قبل از تکمیل سفارش، روش پرداختی را که ترجیح می دهید، تأیید کنید.'/>
        <Accordion id='5' question='دقت سفارش' answer='لطفاً قبل از ارسال، از دقیق بودن تمام جزئیات سفارش خود، از جمله موارد منو، دستورالعمل‌های خاص و  جزئیات سفارش خود اطمینان حاصل کنید تا اختلالی در فرایند پردازش و تحویل سفارشات شما ایجاد نشود و سفارشات شما در سریع‌ترین زمان ممکن به دست‌تان برسد.'/>
        <Accordion id='6' question='شرایط لغو سفارش' answer='شما می‌توانید با تماس مستقیم با هر شعبه از رستوران‌های زنجیره‌ای ترخینه، سفارش خود را لغو کنید. لطفا توجه داشته باشید که ممکن است محدودیت زمانی برای لغو وجود داشته باشد، زیرا ممکن است غذا از قبل آماده شده باشد و در اینصورت متاسفانه امکان لغو سفارش وجود ندارد.'/>
        <Accordion id='7' question='شرایط بازگشت سفارش' answer='اگر سفارش شما انتظارات شما را برآورده نمی کند، لطفاً بلافاصله از طریق تماس تلفنی با ما تماس بگیرید؛ ما در اسرع وقت به دنبال حل مشکل شما  خواهیم بود.'/>
        <Accordion id='8' question='تخفیفات' answer='هر‌گونه تخفیف یا برنامه‌های وفاداری ممکن است قوانین و شرایط خاصی داشته باشد که به وضوح در وب سایت مشخص می‌شود.'/>
    </div>
</div>
</>
  )
}