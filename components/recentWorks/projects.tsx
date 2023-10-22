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
    <div className='projContainer' id="Projects">
      <div className='projTitle'>#Latest Works</div>
      <div className='projcards'>
        {ProjectData?.projects?.map((elements: any, index: number) => {
          return (<ProjectCard key={index} data={elements}
            icon={ProjImages[index]}
            style_={ProjectData?.Styles} index={index === 0 || index % 2 == 0 ? true : false} />)
        })}
      </div>
      <div className='projTitle'>
        <div style={{paddingBottom:"0.8em"}}> More Projects</div>
        {ProjectData?.moreProjects?.map((elements: any, index: number) => {
          return (<div key={index} className='moreprojcontents' title="Click to visit">{index + 1}. <a className='moreProjtitle' href={elements?.link} target='_blank'>{elements?.name}</a> - {elements?.label}</div>)
        })}
      </div>
    </div>
  )
}
