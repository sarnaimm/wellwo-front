import React from 'react'
import Image from "next/image";

function Footer() {
    return (
        <div className="w-full flex justify-center overflow-hidden border-t-2 pt-12 bg-primary">
            <div className=" w-full 2xl:max-w-[1920px] relative">
                <div>
                    {/* <Image src={"/Group.png"} width={1000} height={1000} className=" w-full absolute object-cover bottom-0 xl:top-0 hidden sm:block " alt="group"/> */}
                    <Image src={"/Vector.svg"} width={1000} height={1000} className=" w-full absolute object-cover -bottom-[130px] animate-[spin_300s_linear_infinite] md:animate-[spin_500s_linear_infinite] top-48 sm:top-48 md:top-32 xl:top-12" alt="group" />
                </div>
                <div className="w-full flex justify-between px-[25px] sm:px-[30px] md:px-[80px] pb-8 flex-col md:flex-row">
                    <div className="flex flex-col font-black  gap-8 z-10">
                        <div className="md:flex items-center gap-2 hidden">
                            <Image src={"/images/logo.png"} width={200} height={100} className="h-8 md:h-12 m-0  " />
                        </div>
                        <div className="font-black text-xl text-[#939393] flex md:gap-[20px] gap-[25px] place-items-center ">
                            <Image src={"/icons/facebook.png"} alt="fb" width={30} height={25} className="z-50" />
                            <div className="absolute top-0 left-0 w-full h-full group-hover:bg-white/30 group-hover:blur-sm rounded-lg" />
                            <div className="absolute top-0 left-0 w-full h-full bg-secondary-gray-900 group-hover:bg-secondary-blue-500 rounded-lg" />
                            <Image src={"/icons/instagram.png"} width={30} height={25} />
                            <div className="absolute top-0 left-0 w-full h-full group-hover:bg-white/30 group-hover:blur-sm rounded-lg" />
                            <div className="absolute top-0 left-0 w-full h-full bg-secondary-gray-900 group-hover:bg-secondary-blue-500 rounded-lg" />
                        </div>
                        <h1 className="text-white font-light -my-1 hidden md:block">&copy; 2024 | Wellwo</h1>
                    </div>
                    <div className="font-light md:text-xl text-white flex  flex-col md:gap-[50px] gap-[25px] py-[60px] justify-evenly md:py-0 text-[8px] z-10">
                        <div className="grid items-center gap-2 underline text-lg w-full grid-cols-6 sm:grid-cols-8 md:grid-cols-10">
                            <div
                                className="bg-secondary-gray-900 w-10 aspect-square col-span-1 flex place-items-center justify-center rounded-lg overflow-show duration-150 relative z-10 group"
                            >
                                <Image src={"/icons/msg.png"} alt="fb" width={32} height={16} className="z-50" />
                            </div>
                            <a className="col-span-5 sm:col-span-7 md:col-span-9" href="mailto:contact@nhs.edu.mn">contact@nhs.edu.mn</a>
                        </div>
                        <div className="grid items-center gap-2 underline text-lg w-full grid-cols-6 sm:grid-cols-8 md:grid-cols-10">
                            <div
                                href={"https://www.facebook.com/nestedtechllc"} target="_blank"
                                className="bg-secondary-gray-900 w-10 aspect-square col-span-1 flex place-items-center justify-center rounded-lg overflow-show duration-150 relative z-10 group"
                            >
                                <Image src={"/icons/phone.png"} alt="fb" width={32} height={12} className="z-50" />
                            </div>
                            <div className="col-span-5 sm:col-span-7 md:col-span-9 flex gap-2">
                                <a href="tel:77995555">7799-5555</a>
                                <a href="tel:77994444">7799-4444</a>
                            </div>
                        </div>
                        <div className="grid items-center gap-2 text-lg w-full grid-cols-6 sm:grid-cols-8 md:grid-cols-10">
                            <div
                                className="bg-secondary-gray-900 w-10 aspect-square flex col-span-1 place-items-center  justify-center rounded-lg overflow-show duration-150 relative z-10 group"
                            >
                                <Image src={"/icons/location.png"} alt="fb" width={32} height={12} className="z-50" />
                            </div>
                            <span className="col-span-5 sm:col-span-7 md:col-span-9 w-60 md:w-80 lg:96">Нэст Эдүкэйшн сургуулийн байр <br /> Оюутны гудамж, 8-р хороо, Сүхбаатар дүүрэг,  Улаанбаатар хот</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer