"use client"
import React, { useState } from 'react'

function Search() {
  const [open, setOpen] = useState(false
  )
  return (
    <div className="w-[650px] h-[55px] bg-white rounded-full flex items-center p-0 relative">
      <button onClick={() => setOpen(!open)} id="dropdownDefaultButton" data-dropdown-toggle="search" className="text-[#A3A3A3] rounded-2xl bg-white  mx-4 text-sm gap-2 outline-none px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">Зарын хэлбэр сонгох<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
      </button>
      {open &&
        <div id="search" className="z-10 absolute top-0 translate-y-14 left-8 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Front-End</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Back-End</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Project Manager</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">UI/UX</a>
            </li>
          </ul>
        </div>
      }
      {/* divider */}
      <div className="w-[1px] h-8 bg-black opacity-50"></div>
      {/* divider end */}
      <div>
        <input className="w-80 outline-none text-black ml-5 text-sm placeholder:text-[#A3A3A3]" placeholder="Хайх үг" />
      </div>
      {/* actual search */}
      <button className="w-[36px] h-[36px] rounded-full bg-primary flex justify-center items-center p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
    </div>
  )
}

export default Search