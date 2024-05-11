'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

function Section2() {

    const [selectedImage2, setSelectedImage2] = useState(null);
    const [inputs, setInputs] = useState(Array(8).fill(''));
    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage2(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };

    const handleNextSection = () => {
        // Logic to advance to the next section
    };

    return (
        <div className='w-full bg-white flex flex-col items-center shadow-lg rounded-xl pt-16 px-10'>
            <Image src={"/images/logo2.png"} width={250} height={100} />
            <div className='text-primary text-2xl pt-6'>Компаниар бүртгүүлэх</div>
            <div className='my-6 flex items-center gap-1'>
                <div className='w-6 h-6 border-4 bg-primary border-[#D9D9D9] rounded-full'></div>
                <div className='w-24 h-0.5 bg-primary'></div>
                <div className='w-6 h-6 border-4 bg-primary border-[#D9D9D9] rounded-full'></div>
                <div className='w-24 h-0.5 bg-primary'></div>
                <div className='w-10 h-10 border-8 bg-[#D9D9D9] border-primary rounded-full'></div>
            </div>
            <div className='w-full'>
                <input className="w-full outline-none border border-primary py-3 px-3 my-10 rounded-md text-black placeholder:text-[#A3A3A] font-medium" placeholder='Компанийн алсын хараа' />
            </div>
            <input className="w-full outline-none border border-primary py-3 px-3 mb-10 rounded-md text-black placeholder:text-[#A3A3A] font-medium" placeholder='Компанийн алсын хараа' />
            <textarea
                className="w-full h-40 outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium mb-5 flex justify-start items-start"
                placeholder='Компаний нэр'
            />
            <div className="w-full h-96 mb-5">
                <input type='file' onChange={handleImageChange2} className='hidden' id="imageInput2" />
                <label htmlFor="imageInput2" className="bg-background h-80 border-2 border-dashed w-full py-12 rounded-xl flex justify-center items-center cursor-pointer mb-5">
                    {selectedImage2 ? <img src={selectedImage2} alt="Selected" className="mt-2 rounded-lg" style={{ maxWidth: '100%', maxHeight: '300px' }} /> :
                        <div className='flex gap-2 text-primary'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                            </svg>
                            <div>Зургийн цомог</div>
                        </div>}
                </label>
            </div>
        </div>
    )
}

export default Section2