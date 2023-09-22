import MainContent from '@/components/Main/MainContent';
import HeaderComponent from '@/components/navigationHeader/Header';
import MainData from '../data/MainContentData.json';
import '../Styles.css';

const page = () => {
    return (
        <div className='container'>
            <HeaderComponent />
            <MainContent {...MainData} />
        </div>
    )
}

export default page;