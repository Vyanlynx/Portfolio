import './Header.css';
import IconImg from '../../public/iconImg.svg';
import Image from 'next/image';
const HeaderComponent = (): JSX.Element => {
    return <>
        <div className='text-white flex justify-around items-center py-10'>
            <header className='cursor-pointer'>
                <div className='flex justify-around items-center gap-1'>
                    <Image height={32} width={32} src={IconImg} alt='Atom' />
                    <div>Portfolio</div>
                </div>
            </header>
            <section className='flex justify-around items-center gap-20 text-sm'>
                <nav>Projects</nav>
                <nav>Resume</nav>
                <nav>GitHub</nav>
                <nav>Contact</nav>
            </section>
        </div>
    </>
}

export default HeaderComponent;