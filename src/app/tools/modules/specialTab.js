'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SpecialTab({
    image,
    owner,
    id,
    name,
    location,
    salary,
    date,
}) {

    return (
        <div className="w-[340px] h-60 bg-white px-3 pt-3 pb-6 rounded-xl flex flex-col">
            <div className="w-full h-44 bg-specialTab rounded-lg flex justify-between p-3">
                <div className="flex flex-col w-24">
                    <div className="bg-white rounded-xl p-2 text-xs">{date}</div>
                    <div className="text-lg font-bold mt-3">{name}</div>
                    <div className="font-bold text-sm">{salary}</div>
                </div>
                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between mt-3 items-end">
                <div className="flex">
                    <Image src={image} width={35} height={100} className="mr-2 rounded-full" />
                    <div className="flex flex-col">
                        <div className="text-black opacity-40">{owner}</div>
                        <div className="text-black opacity-40 text-xxs">{location}</div>
                    </div>
                </div>
                <button className="bg-black text-xs rounded-xl text-white px-2 p-2 h-6 flex justify-center items-center">Дэлгэрэнгүй</button>
            </div>
        </div>
    );
}
