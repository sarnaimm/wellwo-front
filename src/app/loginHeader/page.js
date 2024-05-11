import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Search from '../tools/components/home/search';

function LoginHeader() {
  return (
    <div className="w-full h-28 bg-primary flex justify-between items-center px-16 py-5 z-50 fixed">
      <div className="flex items-center gap-10">
        <a href="/home">
          <Image src="/images/logo.png" width={200} height={80} />
        </a>
      </div>
      <Search />
      <div className="flex gap-6 items-center">
        <button className="flex flex-col items-center">
        </button>
        <Link href="/profile">
          <button className="flex gap-2 items-center border border-white py-3 px-6 rounded-3xl bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

            <div className="text-white">Оргил</div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LoginHeader