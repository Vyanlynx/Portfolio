import React from 'react';
import ProjectData from '../../data/projectData.json';
import MoonKartImg from '../../public/Projects/MoonKartApp.png'
import VexorImg from '../../public/Projects/VexorrApp.png'
import MoonPhaseImg from '../../public/Projects/Capture3.png'
import PlannerImg from '../../public/Projects/Capture4.png'
import ProjectCard from '../bloks/projectContainer/projectCard';
import './project.css';

export default function Projects() {
  const ProjImages = [MoonKartImg, VexorImg, MoonPhaseImg, PlannerImg]
  return (
    <div className='projContainer'>
      <div className='projTitle'>#Latest Works</div>
      <div className='projcards'>
        {ProjectData?.projects?.map((elements: any, index: number) => {
          return (<ProjectCard key={index} data={elements}
            icon={ProjImages[index]}
            style_={ProjectData?.Styles} index={index === 0 || index % 2 == 0 ? true : false} />)
        })}
      </div>
    </div>
  )
}
