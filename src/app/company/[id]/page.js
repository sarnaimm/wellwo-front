'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import 'flowbite';
import Header from '@/app/tools/components/header';
import About from '@/app/tools/components/company/about';
import Footer from '@/app/tools/components/footer';
import WorkTabs from '@/app/tools/components/company/tabs';
import AboutContent from '@/app/tools/components/company/aboutContent';

import { companyList } from '@/app/tools/dummy/company';
import LoginHeader from '@/app/loginHeader/page';

function Company({params}) {
    const [activeButton, setActiveButton] = useState('job');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const {id} = params;
    const companyId = parseInt(id, 10);
    console.log(id);

    const companyObj = companyList.find(obj => obj.id === companyId);

    return (
        <div className='w-full bg-background flex flex-col'>
            <LoginHeader />
            <div className='flex flex-col px-14 bg-background mt-28'>
                <Image src={companyObj.cover} width={1350} height={100} />
                <div className='w-full flex justify-end'>
                    <div className='flex items-end absolute bottom-28 left-28'>
                        <Image src={companyObj.image} width={200} height={100} className='border-1 border-white rounded-full' />
                        <div className='flex flex-col text-black mb-7 ml-4'>
                            <div className='text-2xl font-semibold'>{companyObj.name}</div>
                            {/* <div>@surgalt_humuujil</div> */}
                        </div>
                    </div>
                    <button className=' bg-primary rounded-lg font-semibold px-8 py-2 mt-5'>Хуваалцах</button>
                </div>
                <div className='w-full flex my-20 gap-14'>
                    <About id={id}/>
                    <div className='w-full bg-white rounded-2xl p-6 flex flex-col items-center'>
                        <div className='w-full bg-[#F6F3F3] h-16 rounded-2xl flex items-center p-5 gap-4'>
                            <button
                                className={`w-1/2 py-3 ${activeButton === 'job' ? 'bg-primary text-white' : 'bg-[#F6F3F3] text-primary'} font-semibold rounded-xl flex justify-center items-center`}
                                onClick={() => handleButtonClick('job')}
                            >
                                Ажлын зар
                            </button>
                            <button
                                className={`w-1/2 py-3 ${activeButton === 'about' ? 'bg-primary text-white' : 'bg-[#F6F3F3] text-primary'} font-semibold rounded-xl flex justify-center items-center`}
                                onClick={() => handleButtonClick('about')}
                            >
                                Бидний тухай
                            </button>
                        </div>
                        <div className='w-full h-[1px] bg-black opacity-20 my-5'></div>
                        {activeButton === 'job' && <WorkTabs />}
                        {activeButton === 'about' && <AboutContent id={id}/>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Company;