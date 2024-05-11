'use client'
import React, { useState, } from 'react'
import { useRouter } from 'next/navigation';
import 'flowbite';
import Header from '../../tools/components/header'
import Image from 'next/image'
import Detail from '../../tools/components/workDetail/detail';
import Requirement from '../../tools/components/workDetail/requirement';
import Process from '../../tools/components/workDetail/process';
import Footer from '../../tools/components/footer';
import LoginHeader from '@/app/loginHeader/page';

function WorkDetail({ params }) {

    const [activeTab, setActiveTab] = useState(0);
    const router = useRouter();
    const {id} = params;

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='w-full flex flex-col bg-background'>
            <LoginHeader/>
            <div className='flex flex-col p-20 mt-28'>
                <div className='w-full border flex flex-col items-center border-black border-opacity-40 rounded-2xl relative mt-16 p-12'>
                    <div className='w-full flex justify-end'>
                        <div className='flex items-center gap-10 absolute -top-28 left-14'>
                            <Image src="/images/company_logo.png" width={180} height={100} />
                            <div className='flex flex-col'>
                                <div className='text-black text-xl font-semibold mt-16'>НЭСТ ЭДҮКЭЙШН</div>
                                <div className='text-black text-2xl font-bold mt-10'>МЭДЭЭЛЛИЙН АЖИЛТАН</div>
                            </div>
                        </div>
                        <button className='w-32 px-4 py-2 bg-primary rounded-xl'>CV илгээх</button>
                    </div>
                    <div className='w-full'>
                        <div className='flex gap-16 mt-3 text-black relative'>
                            <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'font-semibold' : ''}>Мэдээлэл</button>
                            <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'font-semibold' : ''}>Шаардлага</button>
                            <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'font-semibold' : ''}>Процесс</button>
                            <div className="absolute bottom-0 left-0 top-8 h-0.5 w-full bg-black opacity-40 rounded-xl"></div>
                            <div style={{ width: `${7}%`, transform: `translateX(${activeTab * 173}%)` }} className='absolute bottom-0 left-0 top-7 h-1 bg-primary transition-transform rounded-xl'></div>
                        </div>
                        <div>
                            {activeTab === 0 && <Detail id={id}/>}
                            {activeTab === 1 && <Requirement />}
                            {activeTab === 2 && <Process />}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WorkDetail