'use client'
import React, { useState } from 'react';
import Header from '../tools/components/header';
import Footer from '../tools/components/footer';
import Section1 from '../tools/components/companyRegister/section1';
import Section2 from '../tools/components/companyRegister/section2';
import Section3 from '../tools/components/companyRegister/section3';

function CompanyRegister() {
    // State to manage which section is currently displayed
    const [currentSection, setCurrentSection] = useState('Section1');

    // Function to toggle between sections
    const toggleSection = () => {
        switch (currentSection) {
            case 'Section1':
                setCurrentSection('Section2');
                break;
            case 'Section2':
                setCurrentSection('Section3');
                break;
            case 'Section3':
                setCurrentSection('Section1');
                break;
            default:
                setCurrentSection('Section1');
        }
    };

    // Function to get the text for the bottom div based on the current section
    const getBottomDivText = () => {
        if (currentSection === 'Section3') {
            return 'Хадгалах';
        } else {
            return 'Үргэлжлүүлэх';
        }
    };

    return (
        <div className='flex flex-col bg-background'>
            <Header />
            <div className='w-full mt-28 px-36 py-16'>
                {/* Conditionally render the current section based on the currentSection state */}
                {currentSection === 'Section1' ? <Section1 /> : currentSection === 'Section2' ? <Section2 /> : <Section3 />}
                {/* Bottom div to toggle between sections */}
                <div className='w-full py-4 bg-primary text-center rounded-xl my-12 cursor-pointer' onClick={toggleSection}>
                    {getBottomDivText()}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CompanyRegister;
