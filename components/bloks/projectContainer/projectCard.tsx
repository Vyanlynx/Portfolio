'use client'
import React from 'react';
import Image from 'next/image';
import './projectCars.css'

export default function ProjectCard({ data, icon, style_, index }: any) {
    return (
        <div className={"cardProj " + `${index ? "cRight" : "cLeft"}`}>
            <div className='cardDetails'>
                <div className='projhdr'>{data?.name}</div>
                <div className='projlabel'>{data?.label}</div>
                <div className='viewdet'>View Details {'>'}</div>
            </div>
            <div className='imgClass'>
                <Image src={icon} alt="data" height={400} width={600} />
            </div>
        </div>
    )
}
