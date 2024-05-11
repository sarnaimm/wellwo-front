import React from 'react'
import Image from 'next/image'

function Process() {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <Image src="/images/hooson.png" width={200} height={100} />
      <div className='text-black'>Одоогоор процесс байхгүй байна.</div>
    </div>
  )
}

export default Process