'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

function Section1() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [inputs, setInputs] = useState(Array(8).fill(''));
    const inputRefs = useRef([]);

    useEffect(() => {
        const index = inputs.findIndex(input => input === '');
        if (index !== -1) {
            inputRefs.current[index].focus();
        }
    }, [inputs]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

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
                        <div className='w-10 h-10 border-8 bg-[#D9D9D9] border-primary rounded-full'></div>
                        <div className='w-24 h-0.5 bg-primary'></div>
                        <div className='w-6 h-6 border-4 bg-primary border-[#D9D9D9] rounded-full'></div>
                        <div className='w-24 h-0.5 bg-primary'></div>
                        <div className='w-6 h-6 border-4 bg-primary border-[#D9D9D9] rounded-full'></div>
                    </div>
                    <div className='w-full'>
                        <input className="w-full outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium" placeholder='Компаний нэр' />
                        <div className='w-full flex gap-5 my-10'>
                            {inputs.map((input, index) => (
                                <input
                                    key={index}
                                    ref={el => (inputRefs.current[index] = el)}
                                    className="w-12 flex justify-center items-center outline-none border border-primary py-2 pl-[18px] text-lg rounded-md text-black placeholder:text-[#A3A3A] font-medium"
                                    placeholder='Р'
                                    value={input}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='w-full flex gap-10'>
                        <input className="w-full outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium" placeholder='Утасны дугаар' />
                        <input className="w-full outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium" placeholder='И-мэйл' />
                    </div>
                    <input className="w-full outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium my-10" placeholder='Компаний нэр' />
                    <input className="w-full outline-none border border-primary py-3 px-3 rounded-md text-black placeholder:text-[#A3A3A] font-medium mb-5" placeholder='Компаний нэр' />
                    <div className="w-full flex justify-center my-5">
                        <input type='file' onChange={handleImageChange} className='hidden' id="imageInput" />
                        <label htmlFor="imageInput" className="bg-background border-2 border-dashed py-12 rounded-full w-40 h-40 flex justify-center items-center cursor-pointer mb-5">
                            {selectedImage ? <img src={selectedImage} alt="Selected" className="mt-2 rounded-lg" style={{ maxWidth: '100%', maxHeight: '300px' }} /> :
                                <div className='flex gap-2 text-primary'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                    </svg>
                                    <div>Logo</div>
                                </div>}
                        </label>
                    </div>
                    <div className="w-full h-96 mb-5">
                        <input type='file' onChange={handleImageChange2} className='hidden' id="imageInput2" />
                        <label htmlFor="imageInput2" className="bg-background h-80 border-2 border-dashed w-full py-12 rounded-xl flex justify-center items-center cursor-pointer mb-5">
                            {selectedImage2 ? <img src={selectedImage2} alt="Selected" className="mt-2 rounded-lg" style={{ maxWidth: '100%', maxHeight: '300px' }} /> :
                                <div className='flex gap-2 text-primary'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                    </svg>
                                    <div>Cover Photo</div>
                                </div>}
                        </label>
                    </div>
                    <div className='w-full flex flex-col'>
                        <div className='w-full h-0.5 bg-black opacity-20'></div>
                        <div className='flex w-full gap-3 h-12 items-center my-3 ml-20'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='text-primary' viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" /><path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12.5l2 2l5-5" /></g></svg>
                            <div className='flex flex-col'>
                                <div className='text-sm w-96 whitespace-nowrap'>
                                    <span className='text-[#3894A3] inline-block'>Үйлчилгээний нөхцөл </span>
                                    <div className='text-black inline-block mx-1'>болон</div>
                                    <span className='text-[#3894A3] inline-block'>нууцлалын бодлого </span>
                                    <div className='text-black inline-block mx-1'>хүлээн зөвшөөрч байна.</div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-0.5 bg-black opacity-20 mb-10'></div>
                    </div>
                </div>
  )
}

export default Section1