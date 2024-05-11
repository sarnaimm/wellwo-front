'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';

function Register() {
    const [user_name, setUser_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');
    const router = useRouter();


    const handRegister = async () => {
        try {
            const response = await axios.post("http://localhost:8080/register", {
                user_name, email, password
            });
    
            if (response.status === 200) {
                console.log('success');
                router.push("/home");
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                console.log('Error response:', error.response.data);
            }
        }
    };

    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);
    const [isFocused4, setIsFocused4] = useState(false);

    const handleFocus1 = () => {
        setIsFocused1(true);
    };

    const handleBlur1 = () => {
        setIsFocused1(false);
    };

    const handleFocus2 = () => {
        setIsFocused2(true);
    };

    const handleBlur2 = () => {
        setIsFocused2(false);
    };

    const handleFocus3 = () => {
        setIsFocused3(true);
    };

    const handleBlur3 = () => {
        setIsFocused3(false);
    };

    const handleFocus4 = () => {
        setIsFocused4(true);
    };

    const handleBlur4 = () => {
        setIsFocused4(false);
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className='w-full lg:w-2/5 h-full bg-primary flex flex-col justify-center items-center p-5'>
                    <Image src="/images/login_logo.png" width={200} height={100} className='mb-7' />
                    <div className='relative mb-3'>
                        <input onFocus={handleFocus1} onBlur={handleBlur1} className={`outline-none w-[350px] bg-login_input border ${isFocused1 ? 'border-white' : ' border-white border-opacity-30 opacity-70'} rounded-2xl pl-12 py-3 ${isFocused1 ? 'text-white' : 'text-white'} placeholder-white placeholder-opacity-40`} placeholder='И-мэйл / Утас' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className=' absolute top-3.5 left-3' viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M18.576 7.52a.75.75 0 0 1-.096 1.056l-2.196 1.83c-.887.74-1.605 1.338-2.24 1.746c-.66.425-1.303.693-2.044.693c-.741 0-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1 .96-1.153l2.16 1.799c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455c.345 0 .704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l2.159-1.8a.75.75 0 0 1 1.056.097" clip-rule="evenodd" /></svg>
                    </div>
                    <div className='relative mb-3'>
                        <input onFocus={handleFocus2} onBlur={handleBlur2} className={`outline-none w-[350px] bg-login_input border ${isFocused2 ? 'border-white' : ' border-white border-opacity-30 opacity-70'} rounded-2xl pl-12 py-3 ${isFocused2 ? 'text-white' : 'text-white'} placeholder-white placeholder-opacity-40`} placeholder='Нэр'  value={user_name} onChange={(e) => setUser_name(e.target.value)}/>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 absolute top-3.5 left-3' width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4" /></svg>
                    </div>
                    <div className='relative mb-3'>
                        <input onFocus={handleFocus3} onBlur={handleBlur3} className={`outline-none w-[350px] bg-login_input border ${isFocused3 ? 'border-white' : ' border-white border-opacity-30 opacity-70'} rounded-2xl pl-12 py-3 ${isFocused3 ? 'text-white' : 'text-white'} placeholder-white placeholder-opacity-40`} placeholder='Нууц үг' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <svg xmlns="http://www.w3.org/2000/svg" className=' absolute top-3.5 left-3' width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" /></svg>
                    </div>
                    <div className='relative mb-3'>
                        <input onFocus={handleFocus4} onBlur={handleBlur4} className={`outline-none w-[350px] bg-login_input border ${isFocused4 ? 'border-white' : ' border-white border-opacity-30 opacity-70'} rounded-2xl pl-12 py-3 ${isFocused4 ? 'text-white' : 'text-white'} placeholder-white placeholder-opacity-40`} placeholder='Нууц үг давтах' value={passwordMatch} onChange={(e) => setPasswordMatch(e.target.value)}/>
                        <svg xmlns="http://www.w3.org/2000/svg" className=' absolute top-3.5 left-3' width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" /></svg>
                    </div>
                    <div className='flex flex-col gap-2 mr-28'>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='text-white opacity-40' viewBox="0 0 24 24"><path fill="currentColor" d="m10.562 15.908l6.396-6.396l-.708-.708l-5.688 5.688l-2.85-2.85l-.708.708zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" /></svg>
                            <div className='text-sm opacity-40'>Тоо агуулсан</div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='text-white opacity-40' viewBox="0 0 24 24"><path fill="currentColor" d="m10.562 15.908l6.396-6.396l-.708-.708l-5.688 5.688l-2.85-2.85l-.708.708zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" /></svg>
                            <div className='text-sm opacity-40'>Том ба жижиг үсэг холилдсон</div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='text-white opacity-40' viewBox="0 0 24 24"><path fill="currentColor" d="m10.562 15.908l6.396-6.396l-.708-.708l-5.688 5.688l-2.85-2.85l-.708.708zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" /></svg>
                            <div className='text-sm opacity-40'>8 болон түүнээс дээш оронтой</div>
                        </div>
                    </div>
                    <div className='w-[350px] my-7 flex flex-col justify-between items-center'>
                        <div className='w-96 h-[1px] bg-white opacity-10'></div>
                        <div className='flex gap-3 h-12 items-center my-3 ml-20'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='text-white opacity-40' viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" /><path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5l2 2l5-5" /></g></svg>
                            <div className='flex flex-col'>
                                <div className='text-sm w-96'> <span className='text-[#3894A3]'>Үйлчилгээний нөхцөл </span> болон <br /> <span className='text-[#3894A3]'>нууцлалын бодлого </span> хүлээн зөвшөөрч байна.</div>
                            </div>
                        </div>
                        <div className='w-96 h-[1px] bg-white opacity-10'></div>
                    </div>
                    <button className='w-[350px] py-3 flex justify-center items-center bg-white rounded-lg text-black font-semibold tracking-wider' onClick={handRegister} >Бүртгүүлэх</button>
                    <Link href="/login">
                        <div className='text-white opacity-40 mt-4'>Бүртгэлтэй юу?</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Register 