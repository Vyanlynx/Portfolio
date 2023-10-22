import React from 'react'
import Data from '../../data/skillsData.json';
import { Badge } from '../skills/skills';
export default function Footer() {
    return (
        <div style={{color:"white",padding:"0 2.2em 8em 10em"}}>
            <div className='font-semibold text-teal-400 text-2xl py-3 m'>#Further expertise</div>
            <div className='flex gap-1.5 flex-wrap'>{Data?.otherskills?.map((element: any) => <Badge key={element} data_={element} />)}</div>
        </div>
    )
}
