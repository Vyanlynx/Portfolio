import React from 'react'
import MagicCard from '../bloks/magicCard/magicCard';
import Data from '../../data/experienceData.json'
export default function Experience() {
    return (
        <div className='flex justify-center gap-5 flex-wrap'>{
            Data?.experience?.map((elements: any) => {
                return <>
                    <MagicCard {...elements} />
                </>
            })
        }</div>
    )
}
