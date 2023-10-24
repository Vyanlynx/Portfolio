'use client'
import MainContent from '@/components/Main/MainContent';
import HeaderComponent from '@/components/navigationHeader/Header';
import MainData from '../data/MainContentData.json';
import Skills from '@/components/skills/skills';
import Projects from '@/components/recentWorks/projects';
import '../Styles.css';
import Experience from '@/components/Experience/experience';
import YearsWrapper from '@/components/wonder/yearsWrapper';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer/footer';
const Page = () => {
    const [viewState, setViewState] = useState("loader");

    useEffect(() => {
        heightCalc()
    }, [])
    function heightCalc() {
        if (window) {
            setViewState(window.innerWidth < 768 ? "mobile" : "desktop")
        }
    }
    window.onresize = heightCalc;
    
    return (<div>
        {viewState === "loader" ? <div>Loading!!!</div> : null}
        {viewState === "desktop" ? <div className='container'>
            <HeaderComponent />
            <MainContent {...MainData} />
            <Skills />
            <Experience />
            <YearsWrapper />
            <Projects />
            <Footer />
        </div> : null}
        {viewState === "mobile" ? <div className='mobileError'>
            <div className='mobileViewCenter'>
                <div>Hi, At this time, our current focus is on designing for desktop view, with mobile responsiveness under development.</div>
                <div style={{ padding: "1em 0" }}>Please visit my portfolio in desktop or Tablet.</div>
            </div>
        </div> : null}
    </div>

    )
}

export default Page;