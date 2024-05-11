import React from 'react'
import Image from 'next/image'

export default function Info() {
    return (
        <div className='flex w-[420px] pb-16 mt-5 flex-col bg-white rounded-2xl items-center relative shadow-lg'>
            <Image src="/images/profile2.jpg" width={200} height={100} className=' absolute -top-24 left-[110px] rounded-full' />
            <div className='mt-32 mb-12 text-2xl font-semibold text-black'>Оргил</div>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-4 mr-12'>
                    <div className='w-10 h-10 flex justify-center items-center rounded-full border border-opacity-20 border-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div className='flex flex-col text-black'>
                        <div className='font-medium'>orgil@gmail.com</div>
                        <div className='text-xs opacity-45'>Contact Email</div>
                    </div>
                </div>
                <div className='flex gap-4 mr-12'>
                    <div className='w-10 h-10 flex justify-center items-center rounded-full border border-opacity-20 border-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='flex flex-col text-black'>
                        <div className='font-medium'>+976 99085217</div>
                        <div className='text-xs opacity-45'>Phone</div>
                    </div>
                </div>
                <div className='flex gap-4 mr-12'>
                    <div className='w-10 h-10 flex justify-center items-center rounded-full border border-opacity-20 border-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-black' viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M5.5 3.104h3l.561-1.684A1 1 0 0 0 8.113.104H5.887A1 1 0 0 0 4.94 1.42zm3.967 8.255L8.5 4.104h-3l-.967 7.255a.5.5 0 0 0 .142.42l1.971 1.971a.5.5 0 0 0 .708 0l1.971-1.972a.5.5 0 0 0 .142-.42Z" clip-rule="evenodd" /></svg>
                    </div>
                    <div className='flex flex-col text-black'>
                        <div className='font-medium'>Information Technology</div>
                        <div className='text-xs opacity-45'>Job function</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
