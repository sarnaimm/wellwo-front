"use client";

import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

function AboutContent({id}) {
    const [companydetail, companydetailChange] = useState(null);

    useEffect(()=>{
        fetchData(id);
    },[]);

      const fetchData = async (companyId) => {
        try {
          const response = await axios.get(`http://localhost:8080/company/${companyId}`);
          if (response.status === 200) {
            companydetailChange(response.data);
          } else {
            console.error(response.statusText);
          }
        } catch (error) {
          console.error('Fetch error:', error);
        } 
      };


    return (

        <div className='text-black flex flex-col p-3'>

            {companydetail&&
                companydetail.map((row, i)=>(
                <div className='text-black flex flex-col p-3'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-xl font-semibold'>Компанийн алсын хараа</div>
                        {row.vision}
                    </div>

                    <div className='flex flex-col gap-3 mt-14'>
                        <div className='text-xl font-semibold'>Компанийн эрхэм зорилго</div>
                        {row.mission}
                    </div>

                    <div className='flex flex-col gap-3 mt-14'>
                        <div className='text-xl font-semibold'>Нэмэлт мэдээлэл</div>
                        {row.add_information}
                    </div>
                </div>
            ))
          }
            <div className='flex flex-col gap-3 mt-14'>
                <div className='text-xl font-semibold'>Зургийн цомог</div>
                <div className='flex gap-10'>
                    <Image src="/images/album1.png" width={220} height={100} />
                    <Image src="/images/album2.png" width={220} height={100} />
                    <Image src="/images/album3.png" width={220} height={100} />
                </div>
            </div>
        </div>
    )
}

export default AboutContent