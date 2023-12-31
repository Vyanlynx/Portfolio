'use client'
import './Header.css';
import IconImg from '../../public/iconImg.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const HeaderComponent = (): JSX.Element => {
    const [inputVal, setInputVal] = useState<string>('');
    const [showInputVal, setshowInputVal] = useState<any>(false);
    const router = useRouter();
    let errorMsg = false
    // const verFunction = (e: any) => {
    //     setInputVal(e.target.value)
    //     let date = new Date();
    //     let pass = `v${date.getHours()}${date.getMinutes()}${date.getDay()}!@#$%`
    //     console.log(pass)
    //     if (inputVal === pass && inputVal.length > 5) {
    //         if (window) window?.sessionStorage?.setItem('tokenz', pass)
    //         router.push('/resume')
    //     } else {
    //         console.log("TRY AGAIN")
    //     }
    // }
    return <>
        <div className='text-white flex justify-around items-center py-10' style={{marginLeft:"-5em"}}>
            <header className='cursor-pointer'>
                <div className='flex justify-around items-center gap-1'>
                    <Image height={32} width={32} src={IconImg} alt='Atom' />
                    <div>Portfolio</div>
                </div>
            </header>
            <section className='flex justify-around items-center gap-20 text-sm'>
                <nav><a href='#Projects'>Projects</a></nav>
                <nav className='res'>
                    <div onClick={()=>router.push('/resume')}>Resume</div>
                    {/* <div onClick={() => setshowInputVal(!showInputVal)}>Resume</div> */}
                    {/* {showInputVal && <div className='tabbar'>
                        <div className='tabpop'>
                            <div style={{ color: "white", paddingBottom: "0.3em" }}>Enter the key: {errorMsg ? "INCORRECT" : ''}</div>
                            <div style={{ display: "flex" }}>
                                <input value={inputVal} onChange={verFunction} />
                            </div>
                        </div>
                    </div>} */}
                </nav>
                <nav><a href='https://github.com/Vyanlynx' target='_blank'>GitHub</a></nav>
                {/* <nav> <a href='' target='_blank'>Contact</a></nav> */}
            </section>
        </div>
        {/* <Popup/> */}
    </>
}

export default HeaderComponent;