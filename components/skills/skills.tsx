import React from 'react'
import Data from '../../data/skillsData.json';
import './skills.css';

export default function Skills() {
    return (
        <div className='skillContainer'>
            <div className='flex titlehdr '>#What do I do</div>
            <div className='flex justify-center flex-wrap'>
                <div className='feend px-2'>
                    <div className='hdrskills'>FrontEnd</div>
                    <div className='feBadges'>{Data?.frontend?.map((element: any) => <Badge key={element} data_={element} />)}</div></div>
                <div className='px-2 w-40'>
                    <div className='hdrskills'>BackEnd</div>
                    <div className='feBadges'>{Data?.backend?.map((element: any) => <Badge key={element} data_={element} />)}</div></div>
                <div className='px-2'>
                    <div className='hdrskills'>Database</div>
                    <div className='feBadges'>{Data?.database?.map((element: any) => <Badge key={element} data_={element} />)}</div></div>
                <div className='px-8'>
                    <div className='hdrskills'>DevOps</div>
                    <div className='feBadges'>{Data?.devops?.map((element: any) => <Badge key={element} data_={element} />)}</div></div>
            </div>
        </div>
    )
}

export const Badge = ({ data_ }: any) => {
    return (
        <span className='bdgecont'>
            {data_}
        </span>
    )
}