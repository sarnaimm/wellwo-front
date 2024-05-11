'use client';
import React, { useState } from 'react';
import Footer from '../tools/components/footer';
import Header from '../tools/components/header';
import Image from 'next/image';
import Info from '../tools/components/profile/info';
import Recommended from '../tools/components/profile/recommend';
import CV from '../tools/components/profile/cv';
import SavedJobs from '../tools/components/profile/savedJobs';
import FollowedCompany from '../tools/components/profile/followedCompany';
import Process from '../tools/components/profile/process';
import LoginHeader from '../loginHeader/page';

function Profile() {
    const [activeTab, setActiveTab] = useState('CV');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="w-full flex flex-col bg-background relative">
            <div className="fixed z-50">
                <LoginHeader />
            </div>
            <div className='w-full flex flex-col px-16 mt-28'>
                <Image src="/images/coover.png" width={1350} height={100} />
                <div className='w-full flex gap-6 relative'>
                    <div className='flex flex-col gap-5'>
                        <Info />
                        <Recommended />
                    </div>
                    <div className='w-full flex flex-col'>
                        <div className='flex gap-6 absolute -top-10'>
                            <button
                                className={`bg-${activeTab === 'CV' ? 'primary text-white' : 'white text-black'} px-16 py-2 rounded-tr-2xl rounded-tl-2xl`}
                                onClick={() => handleTabClick('CV')}
                            >
                                <div className='font-semibold'> CV </div>
                            </button>
                            <button
                                className={`bg-${activeTab === 'SavedJobs' ? 'primary text-white' : 'white text-black'} px-4 py-2 rounded-tr-2xl rounded-tl-2xl`}
                                onClick={() => handleTabClick('SavedJobs')}
                            >
                                <div className='font-semibold'>  Хадгалсан ажил </div>
                            </button>
                            <button
                                className={`bg-${activeTab === 'AppliedJobs' ? 'primary text-white' : 'white text-black'} px-4 py-2 rounded-tr-2xl rounded-tl-2xl`}
                                onClick={() => handleTabClick('AppliedJobs')}
                            >
                                <div className='font-semibold'> Дагасан компани </div>
                            </button>
                            <button
                                className={`bg-${activeTab === 'Processes' ? 'primary text-white' : 'white text-black'} px-16 py-2 rounded-tr-2xl rounded-tl-2xl`}
                                onClick={() => handleTabClick('Processes')}
                            >
                                <div className='font-semibold'> Процесс </div>
                            </button>
                        </div>
                        {activeTab === 'CV' && <CV />}
                        {activeTab === 'SavedJobs' && <SavedJobs />}
                        {activeTab === 'AppliedJobs' && <FollowedCompany />}
                        {activeTab === 'Processes' && <Process />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
