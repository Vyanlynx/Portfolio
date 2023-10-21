'use client'
import React from 'react';
import Image from 'next/image';
import './projectCars.css'

export default function ProjectCard({ data, icon, style_, index }: any) {
    return (
        <div className={"cardProj " + `${index ? "cRight" : "cLeft"}`}>
            <div className='cardDetails'>
                <div className='projhdr'>
                    <a href={data?.link} target="_blank">{data?.name}</a>
                </div>
                <div className='projlabel'>{data?.label}</div>
                {/* <div className='viewdet'>View Details {'>'}</div> */}
            </div>
            <div className='imgClass'>
                <a href={data?.link} target="_blank">
                    <Image src={icon} alt={data?.name} height={400} width={600} />
                </a>
            </div>
        </div>
    )
}
