"use client"


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();




  const handleLogin = async () => {
    try {
        const response = await axios.post("http://localhost:8080/login", {
          email, password 
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
        <div className='w-full lg:w-2/5 h-full bg-primary flex flex-col justify-center items-center p-5'>
          <Image src="/images/login_logo.png" width={200} height={100} className='mb-7' />
          <div className='relative mb-5'>
            <input className=' outline-none w-[350px] bg-login_input border border-white opacity-40 rounded-xl pl-12 py-3 placeholder-white' placeholder='Хэрэглэгчийн нэр' value={email} onChange={(e) => setEmail(e.target.value)} />
            <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 absolute top-3.5 left-3' width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4" /></svg>
          </div>
          <div className='relative mb-7'>
            <input className=' outline-none w-[350px] bg-login_input border border-white opacity-40 rounded-xl pl-12 py-3 placeholder-white' placeholder='Нууц үг'  type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <svg xmlns="http://www.w3.org/2000/svg" className=' absolute top-3.5 left-3' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" /></svg>
          </div>
          <button className='w-[350px] py-3 flex justify-center items-center bg-white rounded-lg text-black font-semibold tracking-wider' onClick={handleLogin}>Нэвтрэх</button>
          <div className='w-[350px] my-10 flex justify-between items-center'>
            <div className='w-28 h-[1px] bg-white opacity-40'></div>
            <div className='text-white opacity-40'>Эсвэл</div>
            <div className='w-28 h-[1px] bg-white opacity-40'></div>
          </div>
          <button className='w-[350px] py-3 flex justify-center items-center bg-white rounded-lg text-black font-semibold tracking-wider gap-6 mb-5'>
            <Image src="/images/google.png" width={25} height={100} />
            <div className='text-black text-sm font-medium'>Google-ээр нэвтрэх</div>
          </button>
          <button className='w-[350px] py-3 flex justify-center items-center bg-white rounded-lg text-black font-semibold tracking-wider gap-6 mb-10'>
            <Image src="/images/fb.png" width={25} height={100} />
            <div className='text-black text-sm font-medium'>Facebook-ээр нэвтрэх</div>
          </button>
          <div className='text-white opacity-40'>Нууц үгээ мартсан уу?</div>
        </div>
      </div>
    </>
  )
}

export default Login 