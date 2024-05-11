import React from 'react'
import { specialList } from '../../dummy/special'
import Link from 'next/link'
import SpecialTab2 from '../company/specialTab2'

function savedJobs() {
  return (
    <div className='w-full flex flex-col bg-white text-black rounded-2xl p-5 pt-12 gap-5 shadow-lg'>
      <div className="w-full grid grid-cols-2 gap-1 text-black overflow-x-auto mb-20 z-10">
        {specialList.map((row, i) => (
          <Link href={`/workDetail/${row.id}`} key={row.id}>
            <SpecialTab2
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
    </div>
  )
}

export default savedJobs