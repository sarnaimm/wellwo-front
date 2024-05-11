'use client';
import React, { useState } from 'react';
import 'flowbite';

function CV() {
    const [selectedOption, setSelectedOption] = useState(''); // State to store the selected option

    const handleOptionClick = (option) => {
        setSelectedOption(option); // Update the selected option state when an option is clicked
    };

    return (
        <div className='flex flex-col gap-5 items-center'>
            <div className='w-full flex flex-col bg-white text-black rounded-br-2xl rounded-bl-2xl p-5 gap-5 shadow-lg'>
                <div className='text-lg font-medium mb-5'>Хувийн мэдээлэл</div>
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-1'>
                        <div className='opacity-45 ml-0.5'>Овог</div>
                        <input className="w-96 outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='opacity-45 ml-0.5'>Нэр</div>
                        <input className="w-96 outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-1'>
                        <div className='opacity-45 ml-0.5'>Регистрийн дугаар</div>
                        <input className="w-96 outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='opacity-45 ml-0.5'>Төрсөн он сар</div>
                        <input type='date' className="w-96 outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-1 relative'>
                        <div className='opacity-45 ml-0.5'>Хүйс</div>
                        <button id="dropdownDefaultButton" data-dropdown-toggle="salbar" className="relative w-96 outline-none border border-primary py-[8px] px-2 rounded-md text-black text-sm" type="button">
                            <div className="w-full flex justify-between items-center">
                                <span>{selectedOption || ''}</span> {/* Display selected option or default text */}
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                        </button>
                        <div id="salbar" className="z-10 hidden bg-primary divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <button className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleOptionClick('Эрэгтэй')}>Эрэгтэй</button>
                                </li>
                                <li>
                                    <button className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleOptionClick('Эмэгтэй')}>Эмэгтэй</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='opacity-45 ml-0.5'>И-мэйл</div>
                        <input className="w-96 outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                    </div>
                </div>
                <div className='flex flex-col w-full gap-21'>
                    <div className='opacity-45 ml-0.5'>Хаяг</div>
                    <input className="w-[795px] outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                </div>
            </div>
            <div className='w-full flex flex-col bg-white text-black rounded-2xl p-5 gap-5 shadow-lg'>
                <div className='text-lg font-medium mb-5'>Ажлын туршлага</div>
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-1'>
                        <div className='opacity-45 ml-0.5'>Ажиллаж буй компани</div>
                        <input className="w-96 outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='opacity-45 ml-0.5'>Албан тушаал</div>
                        <input className="w-96 outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-1'>
                        <div className='opacity-45 ml-0.5'>Хэзээнээс ажиллаж эхэлсэн</div>
                        <input className="w-96 outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='opacity-45 ml-0.5'>Гарсан бол хэзээнээс гарсан</div>
                        <input className="w-96 outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                    </div>
                </div>
                <div className='flex flex-col w-full gap-21'>
                    <div className='opacity-45 ml-0.5'>Мэргэжил</div>
                    <input className="w-[795px] outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                </div>
            </div>
            <div className='w-full flex flex-col bg-white text-black rounded-2xl p-5 gap-5 shadow-lg'>
            <div className='text-lg font-medium mb-'>Хувийн мэдээлэл</div>
                <div className='flex flex-col w-full gap-2'>
                    <div className='opacity-45 ml-0.5'>Хувийн чадвар</div>
                    <input className="w-[795px] outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                </div>
            </div>
            <div className='w-full flex flex-col bg-white text-black rounded-2xl p-5 gap-5 shadow-lg'>
            <div className='text-lg font-medium mb-'>Таны онцгой тал</div>
                <div className='flex flex-col w-full gap-2'>
                    <div className='opacity-45 ml-0.5'>Онцгой чадвар</div>
                    <input className="w-[795px] outline-none border border-primary py-2 px-2 rounded-md text-black text-sm" />
                </div>
            </div>
            <div className=' w-40 py-2 text-center px-10 rounded-xl bg-primary text-white font-medium mb-5'>Хадгалах</div>
        </div>
    );
}

export default CV;
