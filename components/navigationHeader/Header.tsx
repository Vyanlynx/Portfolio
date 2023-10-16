'use client'
import './Header.css';
import IconImg from '../../public/iconImg.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const HeaderComponent = (): JSX.Element => {
    const [inputVal, setInputVal] = useState<string>('');
    const router = useRouter()
    const verFunction = () => {
        let date = new Date();
        let pass = `v${date.getHours()}${date.getMinutes()}${date.getDay()}!@#$%`
        if (inputVal === pass) {
            if (window) window?.sessionStorage?.setItem('tokenz', pass)
            router.push('/resume')
        } else {
            console.log("TRY AGAIN")
        }
    }

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
                <nav className='res'>
                    <div>Resume</div>
                    <div className='tabbar'>
                        <div className='tabpop'>
                            <div style={{ color: "white", paddingBottom: "0.3em" }}>Enter the key:</div>
                            <div style={{ display: "flex" }}>
                                <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                                <button onClick={verFunction}>Submit</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav>GitHub</nav>
                <nav>Contact</nav>
            </section>
        </div>
        {/* <Popup/> */}
    </>
}

export default HeaderComponent;