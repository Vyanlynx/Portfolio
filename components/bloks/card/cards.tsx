import React from 'react';
import Image from 'next/image';
import './card.css';

export default function Cards({ data, icon,style_ }: any) {

    return (
        <div className={style_?.container}>
            <Image src={icon} alt="test" height={style_.height} width={style_.width} />
            <h2 className={style_.name}>{data.name}</h2>
            <div className={style_.contentLabel}>{data.label}</div>
        </div>
    )
}
