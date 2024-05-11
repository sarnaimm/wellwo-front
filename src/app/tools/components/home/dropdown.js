'use client'
import React from 'react'

function DropDowns() {
  return (
    <>
      <button id="dropdownDefaultButton" data-dropdown-toggle="salbar" className="text-black rounded-2xl bg-white gap-24 border border-primary  text-xs outline-none px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">Ажлын салбар<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" d="m1 1 4 4 4-4" />
      </svg>
      </button>
      <div id="salbar" className="z-10 hidden bg-primary divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700">
        <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
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
      <button id="dropdownDefaultButton" data-dropdown-toggle="bairshil" className="text-black rounded-2xl border border-primary ml-10  text-xs gap-32 outline-none px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">Байршил<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" d="m1 1 4 4 4-4" />
      </svg>
      </button>
      <div id="bairshil" className=" z-10 hidden bg-primary divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700">
        <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Хан-Уул дүүрэг</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Сүхбаатар дүүрэг</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Чингэлтэй дүүрэг</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Баянгол дүүрэг</a>
          </li>
        </ul>
      </div>
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-black rounded-2xl border border-primary ml-10 text-ellipsis  text-xs gap-20 outline-none px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">Ажиллах цагийн төрөл<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" d="m1 1 4 4 4-4" />
      </svg>
      </button>
      <div id="dropdown" className="z-10 hidden bg-primary divide-y divide-gray-100 rounded-2xl shadow-2xl w-72 dark:bg-gray-700">
        <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Хагас цагийн ажил</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Бүтэн цагийн ажил</a>
          </li>
        </ul>
      </div>
      <button id="dropdownDefaultButton" data-dropdown-toggle="Timezone" className="text-black rounded-2xl border border-primary ml-10  text-xs gap-40 outline-none px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">Цалин<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" d="m1 1 4 4 4-4" />
      </svg>
      </button>
      <div id="Timezone" className="z-10 hidden bg-primary divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700">
        <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1`500`000₮</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2`000`000₮</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2`500`000₮</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3`000`000₮</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default DropDowns