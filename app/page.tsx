import MainContent from '@/components/Main/MainContent';
import HeaderComponent from '@/components/navigationHeader/Header';
import MainData from '../data/MainContentData.json';
import Skills from '@/components/skills/skills';
import Projects from '@/components/recentWorks/projects';
import '../Styles.css';
import Experience from '@/components/Experience/experience';
import YearsWrapper from '@/components/wonder/yearsWrapper';
const page = () => {
    return (
        <div className='container'>
            <HeaderComponent />
            <MainContent {...MainData} />
            <Skills />
            <Experience />
            <YearsWrapper/>
            <Projects/>
        </div>
    )
}

export default page;