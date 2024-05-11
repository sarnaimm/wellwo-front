'use client'
import React from "react";
import Image from "next/image";

export default function CompanyTab({
    image,
    name,
    row
}) {

    return (
        <div className="w-48 h-40 relative flex items-end justify-center">
            <Image src={image} width={100} height={100} className="bg-white absolute top-3 rounded-full shadow-lg z-50" />
            <div className="w-48 h-24 bg-white rounded-2xl flex justify-center text-center items-end p-3">
                <div className="text-sm text-primary font-medium">{name}</div>
            </div>
        </div>
    );
}