'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Begin() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);

    const handleHover = () => {
        if (!isClicked2) {
            setIsHovered(true);
        }
    };

    const handleLeave = () => {
        if (!isClicked2 && !isClicked) {
            setIsHovered(false);
        }
    };

    const handleHover2 = () => {
        if (!isClicked) {
            setIsHovered2(true);
        }
    };

    const handleLeave2 = () => {
        if (!isClicked && !isClicked2) {
            setIsHovered2(false);
        }
    };

    const handleClick = () => {
        if (isClicked) {
            setIsClicked(false);
            setIsHovered(false); // Reset hover state immediately
            setIsHovered2(false);
        } else {
            setIsClicked(true);
            setIsHovered(true);
            setIsHovered2(false);
            setIsClicked2(false);
        }
    };

    const handleClick2 = () => {
        if (isClicked2) {
            setIsClicked2(false);
            setIsHovered2(false); // Reset hover state immediately
            setIsHovered(false);
        } else {
            setIsClicked2(true);
            setIsHovered2(true);
            setIsHovered(false);
            setIsClicked(false);
        }
    };

    return (
        <>
            <div className='w-full h-screen flex'>
                <div className='w-3/5 h-full bg-white justify-center items-center relative hidden lg:block'>
                    <div className='absolute top-14'>
                        <Image src="/images/login.png" width={800} height={100} className='' />
                    </div>
                    <Link href="/">
                        <button className='w-12 h-12 border border-black opacity-50 rounded-full flex justify-center items-center absolute top-12 left-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className='w-full lg:w-2/5 h-full bg-primary flex flex-col justify-center items-center p-10'>
                    <Image src={"/images/logo.png"} width={300} height={100} className='mt-20' />
                    <div className='text-2xl font-semibold my-16'>Та хэрхэн бүртгүүлэх вэ?</div>
                    <div className='w-full flex gap-6 ml-4 mb-60 items-center'>
                        <Link href="/companyRegister">
                            <div
                                className={`bg-primary rounded-3xl px-7 py-4 flex flex-col items-center gap-2 ${isHovered || isClicked ? 'hovered' : ''}`}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleLeave}
                                onClick={handleClick}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className={`w-40 ${isHovered || isClicked ? 'text-primary' : 'text-white'}`} viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M3 22V12c0-1.886 0-2.828.586-3.414C4.172 8 5.114 8 7 8c1.886 0 2.828 0 3.414.586C11 9.172 11 10.114 11 12" />
                                        <path d="M17 22v-6c0-1.886 0-2.828-.586-3.414C15.828 12 14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586C7 13.172 7 14.114 7 16v6" />
                                        <path d="M21 22V7.772c0-1.34 0-2.011-.356-2.525c-.356-.514-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12" />
                                        <path strokeLinecap="round" d="M4 8V6.5c0-.943 0-1.414.293-1.707C4.586 4.5 5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293C10 5.086 10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h4m-4 3h4" />
                                    </g>
                                </svg>
                                <div className={`text-2xl font-semibold ${isHovered || isClicked ? 'text-primary' : 'text-white'}`}>Байгууллага</div>
                                <style jsx>{`.bg-primary {background-color: #163570; /* Change to your primary color */}.hovered {background-color: #ffffff; /* White background */transform: translateY(-5px); /* Move 5px upward */transition: background-color 0.6s, transform 0.6s; /* Transition effect */}`}</style>
                            </div>
                        </Link>
                        <div className='w-0.5 h-60 bg-white opacity-50'></div>
                        <Link href="/register">
                            <div
                                className={`bg-primary rounded-3xl px-7 py-4 flex flex-col items-center gap-2 ${isHovered2 || isClicked2 ? 'hovered' : ''}`}
                                onMouseEnter={handleHover2}
                                onMouseLeave={handleLeave2}
                                onClick={handleClick2}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className={`w-40 ${isHovered2 || isClicked2 ? 'text-primary' : 'text-white'}`} viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="5" /><path stroke-linecap="round" stroke-linejoin="round" d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7" /></g>
                                </svg>
                                <div className={`text-2xl font-semibold ${isHovered2 || isClicked2 ? 'text-primary' : 'text-white'}`}>Хувь хүн</div>
                                <style jsx>{`.bg-primary {background-color: #163570; /* Change to your primary color */}.hovered {background-color: #ffffff; /* White background */transform: translateY(-5px); /* Move 5px upward */transition: background-color 0.6s, transform 0.6s; /* Transition effect */}`}</style>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Begin;


