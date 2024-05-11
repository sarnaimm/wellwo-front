"use client";

import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

function Detail({id}) {
    const [job, setJob] = useState(null);

    useEffect(()=>{
        fetchData(id);
    },[]);

      const fetchData = async (jobId) => {
        try {
          const response = await axios.get(`http://localhost:8080/job/${jobId}`);
          if (response.status === 200) {
            setJob(response.data);
          } else {
            console.error(response.statusText);
          }
        } catch (error) {
          console.error('Fetch error:', error);
        } 
      };


    return (
        <>
        {job&&
        job.map((row, i)=>(
            <div className='flex flex-col items-center'>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold'>Хийж гүйцэтгэх үүрэг</div>
                    <ul className='className="list-disc ml-3'>
                        <li>{row.role}</li>
                    </ul>
                </div>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold'>Цалин</div>
                    <ul className='className="list-disc ml-3'>
                        <li>{row.salary}</li>
                    </ul>
                </div>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold '>Хангамж урамшуулал, бусад боломжууд</div>
                    <div className='flex gap-6'>
                        <div className='rounded-2xl px-4 font-medium bg-primary text-white flex justify-center items-center'>Уян хатан ажлын цаг</div>
                        <div className='rounded-2xl px-4 font-medium bg-primary text-white flex justify-center items-center'>Цалинтай чөлөө</div>
                        <div className='rounded-2xl px-4 font-medium bg-primary text-white flex justify-center items-center'>Урамшуулал</div>
                        <div className='rounded-2xl px-4 font-medium bg-primary text-white flex justify-center items-center'>Тав тухтай орчин</div>
                        <div className='rounded-2xl px-3 py-1 font-medium bg-primary text-white flex justify-center items-center'>Хуримтлал хадгаламж</div>
                    </div>
                </div>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold'>Байршил</div>
                    <ul className='className="list-disc ml-3'>
                        <li>{row.location}</li>
                    </ul>
                </div>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold'>Нэмэлт мэдээлэл</div>
                    <ul className='className="list-disc ml-3'>
                        <li>{row.add_information}</li>
                    </ul>
                </div>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold'>Компанийн мэдээлэл</div>
                    <ul className='className="list-disc ml-3'>
                        <li>{row.company_information}</li>
                    </ul>
                </div>
                <div className='w-36 flex justify-center items-center text-white rounded-xl p-3 mt-10 bg-primary'>Дэлгэрэнгүй</div>
            </div>
        ))
        }



            {/* <div className='flex flex-col items-center'>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold '>Хийж гүйцэтгэх үүрэг</div>
                    <ul className="list-disc ml-3">
                        <li>Мобиком Групп компанийн Борлуулалтын орлого өртгийн бүртгэл, Бараа материалын бүртгэл, Авлага өглөгийн бүртгэл, Татварын бүртгэл, Борлуулалтын сувгийн тооцоо бүртгэл хийх</li>
                        <li>Нягтлан бодох бүртгэлийн хяналтыг хийх</li>
                        <li>Харилцагчийн тооцоо нийлж авлага өглөгийг барагдуулах</li>
                        <li>Бэлэн мөнгө болон барааны тооллого хийж,  санхүүгийн хяналт хийх</li>
                        <li>Аудит болон удирдлагыг шаардлагатай мэдээ тайлангаар хангах</li>
                    </ul>
                </div>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold '>Цалин</div>
                    <ul className="list-disc ml-3">
                        <li>Хамгийн багадаа 2,000,000₮</li>
                    </ul>
                </div>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold '>Хангамж урамшуулал, бусад боломжууд</div>
                    <div className='flex gap-6'>
                        <div className='rounded-2xl px-4 font-medium bg-primary text-white flex justify-center items-center'>Уян хатан ажлын цаг</div>
                        <div className='rounded-2xl px-4 font-medium bg-primary text-white flex justify-center items-center'>Цалинтай чөлөө</div>
                        <div className='rounded-2xl px-4 font-medium bg-primary text-white flex justify-center items-center'>Урамшуулал</div>
                        <div className='rounded-2xl px-4 font-medium bg-primary text-white flex justify-center items-center'>Тав тухтай орчин</div>
                        <div className='rounded-2xl px-3 py-1 font-medium bg-primary text-white flex justify-center items-center'>Хуримтлал хадгаламж</div>
                    </div>
                </div>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold '>Байршил</div>
                    <ul className="list-disc ml-3">
                        <li>Улаанбаатар Сүхбаатар</li>
                    </ul>
                </div>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold '>Нэмэлт мэдээлэл</div>
                    <ul className="list-disc ml-3">
                        <li>Санхүү, Нягтлан Бодох Бүртгэлийн чиглэлээр мэргэжил эзэмшсэн, бакалавр болон түүнээс дээш боловсролын зэрэгтэй.</li>
                        <li>Мэргэжлийн чиглэлээрээ ажилласан туршлагатай /ACCA, мэргэшсэн нягтлан бодогч, Татварын итгэмжлэгдсэн нягтлан бодогч байвал давуу тал болно.</li>
                        <li>Нарийн төвөгтэй зүйлийн учир шалтгааныг олох ур чадвартай байх.</li>
                        <li>Багаар ажиллах болон харилцааны ур чадвартай.</li>
                    </ul>
                </div>
                <div className='w-full mt-14 flex flex-col gap-6 text-black'>
                    <div className='text-xl font-semibold '>Компанийн мэдээлэл</div>
                    <ul className="list-disc ml-3">
                        <li>Дэлхийн жишигт нийцсэн мэдээллийн технологи, харилцаа холбооны үйлчилгээ үзүүлэгч Мобиком Корпорацид тавтай морилно уу.</li>
                    </ul>
                </div>
                <div className='w-36 flex justify-center items-center text-white rounded-xl p-3 mt-10 bg-primary'>Дэлгэрэнгүй</div>
            </div> */}
        </>
    )
}

export default Detail