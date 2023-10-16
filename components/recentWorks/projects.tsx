import React from 'react';
import Cards from '../bloks/card/cards';
import ProjectData from '../../data/projectData.json';
import MoonKartImg from '../../public/Projects/Capture1.png'
import VexorImg from '../../public/Projects/Capture2.png'
import MoonPhaseImg from '../../public/Projects/Capture3.png'
import PlannerImg from '../../public/Projects/Capture4.png'

export default function Projects() {
  const ProjImages=[MoonKartImg,VexorImg,MoonPhaseImg,PlannerImg]
  return (
    <div>
      <div>Projects</div>
      {ProjectData?.projects?.map((elements: any, index: number) => {
        return (<Cards data={elements}
          icon={ProjImages[index]}
          style_={ProjectData?.Styles} />)
      })}
    </div>
  )
}
