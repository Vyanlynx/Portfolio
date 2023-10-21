import React from 'react'
import './magicCard.css';

export default function MagicCard(props: any) {
    return (
        <div className='magiccardContainer'>
            <div className='year'>{props?.Year}</div>
            <div className='mdesig'>{props?.designation}</div>
            <div className='mdesc'>{props?.description}</div>
        </div>
    )
}
