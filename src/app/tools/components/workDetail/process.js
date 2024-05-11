import React from 'react'

function Process() {
    return (
        <div className='w-full mt-14 mb-80 flex flex-col gap-6 text-black'>
            <div className='text-xl font-semibold '>Сонгон шалгаруулалтын процесс</div>
            <div className='flex flex-col'>
                <div className='flex gap-5 items-center'>
                    <div className='w-12 h-12 bg-primary rounded-full border-8 border-[#cad4e3] border-opacity-90'></div>
                    <div className='text-lg'>Анкет илгээх</div>
                </div>
                <div className='w-[2px] h-12 bg-black ml-6'></div>
                <div className='flex gap-5 items-center'>
                    <div className='w-12 h-12 bg-primary rounded-full border-8 border-[#cad4e3] border-opacity-90'></div>
                    <div className='text-lg'>Тест авах</div>
                </div>
                <div className='w-[2px] h-12 bg-black ml-6'></div>
                <div className='flex gap-5 items-center'>
                    <div className='w-12 h-12 bg-primary rounded-full border-8 border-[#cad4e3] border-opacity-90'></div>
                    <div className='text-lg'>Ярилцлага хийх</div>
                </div>
            </div>
        </div>
    )
}

export default Process