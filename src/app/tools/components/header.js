import React from 'react'
import Search from './home/search'
import Image from "next/image";
import Link from 'next/link';

function Header() {
  return (
    <div className="w-full h-28 bg-primary flex justify-between items-center px-16 py-5 z-50 fixed">
      <div className="flex items-center gap-10">
        <a href='/'>
          <Image src="/images/logo.png" width={200} height={80} />
        </a>
      </div>
      <Search />
      <div className="flex gap-6 items-center">
        <button className="flex flex-col items-center">
          <Link href="/begin">
            <div>Бүртгүүлэх</div>
          </Link>
        </button>
        <Link href="/login">
          <button className="flex gap-2 items-center bg-white py-3 px-6 rounded-3xl">
            <Image src="/icons/profile.svg" width={24} height={24} />
            <div className="text-primary">Нэвтрэх</div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header