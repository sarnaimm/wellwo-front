'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

function Section2() {

    return (
        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-xl pt-16 px-10'>
            <Image src={"/images/logo2.png"} width={250} height={100} />
            <div className='text-primary text-2xl pt-6'>Компаниар бүртгүүлэх</div>
            <div className='my-8 flex items-center gap-1'>
                <div className='w-6 h-6 border-4 bg-primary border-[#D9D9D9] rounded-full'></div>
                <div className='w-24 h-0.5 bg-primary'></div>
                <div className='w-10 h-10 border-8 bg-[#D9D9D9] border-primary rounded-full'></div>
                <div className='w-24 h-0.5 bg-primary'></div>
                <div className='w-6 h-6 border-4 bg-primary border-[#D9D9D9] rounded-full'></div>
            </div>
            <div className='w-full'>
                <input className="w-full  outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium" placeholder='Үйл ажиллагааны салбар' />
            </div>
            <div className='w-full flex gap-10 my-10'>
                <input className="w-full outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium" placeholder='Дэлгэрэнгүй хаяг' />
            </div>
            <div className='w-full'>
                <input className="w-full outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium" placeholder='Байгуулагдсан он' />
            </div>
            <div className='w-full flex gap-10 my-10'>
                <input className="w-full outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium" placeholder='Вэбсайт холбоос ...' />
            </div>
            <div className='w-full'>
                <input className="w-full outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium" placeholder='Вэбсайт холбоос ...' />
            </div>
            <div className='w-full flex gap-10 my-10'>
                <input className="w-full outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium" placeholder='Вэбсайт холбоос ...' />
            </div>
            <div className='w-full h-0.5 bg-black opacity-20 mb-10'></div>
        </div>
    )
}

export default Section2