import React from 'react'
import { specialList } from '@/app/tools/dummy/special'
import SpecialTab2 from './specialTab2'

function WorkTabs() {
    return (
        <div className='grid grid-cols-2 text-black'>
            {specialList.map((row, i) => (
                <div key={i}>
                    <SpecialTab2
                        name={row.name}
                        image={row.image}
                        location={row.location}
                        date={row.date}
                        salary={row.salary}
                        owner={row.owner}
                    />
                </div>
            ))}
        </div>
    )
}

export default WorkTabs