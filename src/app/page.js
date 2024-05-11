'use client'
import Image from "next/image";
import './globals.css';
import 'flowbite';
import CompanyTab from "./tools/modules/companyTab";
import { companyList } from "./tools/dummy/company";
import DropDowns from "./tools/components/home/dropdown";
import { specialList } from "./tools/dummy/special";
import SpecialTab from "./tools/modules/specialTab";
import Header from "./tools/components/header";
import Link from "next/link";
import Footer from "./tools/components/footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-background relative">
      <div className="fixed z-50">
        <Header />
      </div>
      <div className="w-full bg-white flex items-center px-16 py-6 mt-28 gap-8 z-10">
        {/* FlowBite */}
        <DropDowns />
      </div>
      <div className="flex flex-col px-16 mt-7">
        <Image src="/images/banner.png" width={1350} height={100} />
        <div className=" text-xl font-bold mt-10 text-black">Хамтан ажилагсад</div>
        <div className="w-20 h-[2px] bg-[#EF476F] mb-5 rounded-full"></div>
        <div className="flex gap-12 text-black overflow-x-auto mt-5 mb-20 z-20">
          {companyList.map((row, i) => (
            <Link href={`/company/${row.id}`} key={i}>
              <CompanyTab
                name={row.name}
                image={row.image}
              />
            </Link>
          ))}
        </div>
        <Image src="/images/banner2.png" width={1350} height={100} />
        <div className=" text-xl font-bold mt-14 text-black">Онцгой зар</div>
        <div className="w-20 h-[2px] bg-[#EF476F] mb-10 rounded-full"></div>
        <div className="w-full flex gap-6 text-black overflow-x-auto">
          {specialList.map((row, i) => (
            <Link href={`/workDetail/${row.id}`} key={i}>
              <SpecialTab
                name={row.name}
                image={row.image}
                location={row.location}
                date={row.date}
                salary={row.salary}
                owner={row.owner}
              />
            </Link>
          ))}
        </div>
        <div className="text-xl font-bold mt-14 mb-1 text-black">Хамгийн их үзэлттэй</div>
        <div className="w-20 h-[2px] bg-[#EF476F] mb-10 rounded-full"></div>
        <div className="w-full flex gap-6 text-black overflow-x-auto mb-20 z-10">
          {specialList.map((row, i) => (
            <Link href={`/workDetail/${row.id}`} key={row.id}>
              <SpecialTab
                name={row.name}
                image={row.image}
                location={row.location}
                date={row.date}
                salary={row.salary}
                owner={row.owner}
              />
            </Link>
          ))}
        </div>
        <div className="relative flex w-full h-[650px] mb-12">
          <div className="flex w-1/3 h-full">
            <div className="flex flex-col gap-5 items-center">
              <div className=" w-96 h-32 gap-5 flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl">
                <Image src="/icons/verify.svg" width={40} height={100} />
                <div className="text-xl font-semibold text-black">Бидэнтэй нэгд</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
              <div className="w-60 text-primary font-medium text-center">Хүүхдүүдийн хийсэн хүүхдүүдэд зориулсан сайт. Бидэнтэй нэгдээрэй</div>
            </div>
          </div>
          <Image src="/icons/arrow.svg" width={80} height={100} className="absolute left-[420px] top-10" />
          <div className="flex items-center w-1/3 h-full">
            <div className="flex flex-col gap-5 items-center">
              <div className=" w-96 h-32 gap-5 flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl">
                <Image src="/icons/verify.svg" width={40} height={100} />
                <div className="text-xl font-semibold text-black">Мэдлэгээ үнэлүүл</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
              <div className="w-48 text-primary font-medium text-center">Өөрийн профайлыг үүсгэж, өөрийн мэдлэг, ур чадвар, туршлагаа онцлоорой.</div>
            </div>
          </div>
          <Image src="/icons/arrow.svg" width={80} height={100} className="absolute right-96 top-60" />
          <div className="flex items-end w-1/3 h-full">
            <div className="flex flex-col gap-5 items-center">
              <div className=" w-96 h-32 gap-5 flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl">
                <Image src="/icons/verify.svg" width={40} height={100} />
                <div className="text-xl font-semibold text-black">Хязгааргүй боломж</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
              <div className="w-48 text-primary font-medium text-center">Өөрийгөө бүх талаар нь хөгжүүлж, байх ёстой газраа олоорой.</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
