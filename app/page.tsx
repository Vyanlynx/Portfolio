import MainContent from '@/components/Main/MainContent';
import HeaderComponent from '@/components/navigationHeader/Header';
import MainData from '../data/MainContentData.json';
import Techs from '@/components/secondBar/Techs';
import '../Styles.css';

const page = () => {
    return (
        <div className='container'>
            <HeaderComponent />
            <MainContent {...MainData} />
            <Techs/>
        </div>
    )
}

export default page;