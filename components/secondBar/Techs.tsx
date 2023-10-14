import React from 'react';
import './Tech.css';
import Cards from '../bloks/card/cards';
import Data from '../../data/MernData.json'
import ReactSVG from '../../public/StacksIcons/react.svg'
import MongoSVG from '../../public/StacksIcons/mongo.svg'
import NodeSVG from '../../public/StacksIcons/node.svg'
import ExpressSVG from '../../public/StacksIcons/express.svg'

export default function Techs() {
    const StackArr = [MongoSVG, ExpressSVG, ReactSVG, NodeSVG]

    return (
        <div>
            <div className='flex justify-center txthdr'>My Tech Stacks</div>
            <div className='techContainer'>
                {Data?.stack?.map((elements: any, index: number) => {
                    return <Cards key={index}
                        data={elements}
                        icon={StackArr[index]}
                        style_={Data?.Styles}
                    />
                })}
            </div>
        </div>
    )
}
