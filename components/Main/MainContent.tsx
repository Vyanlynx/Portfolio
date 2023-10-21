'use client'
import Image from "next/image";
import './MainCont.css';
import LinkedIn from '../../public/FrontPageIcons/linkedIn.svg'
import Insta from '../../public/FrontPageIcons/insta.svg'
import Indeed from '../../public/FrontPageIcons/indeed.svg'
import Discord from '../../public/FrontPageIcons/discord.svg'
import { useEffect, useState } from "react";

export default function MainContent(props: any) {
    const [devState, setDevState] = useState<number>(0);
    // useEffect(() => {
    //     let Interval_ = setInterval(() => {
    //         if (devState >= 2) setDevState(0)
    //         else if (devState < 2) setDevState(devState + 1)
    //     }, 3000)
    //     return () => clearInterval(Interval_)
    // })

    return (
        <div className="text-white flex justify-center items-center contmain">
            <section className="cont1">
                <div className="fnt">
                    <section className=""><span>{props.greet}</span>
                        <div>
                            <span className="nameclr text-3xl"> I am </span>
                            <span className="nameclr text-3xl">{props.name}</span>
                        </div>
                    </section>
                    <div style={{ overflow: "hidden" }}>
                        <div className="stack2">{props.stack[devState]}</div>
                    </div>
                </div>
                <div className="stack90">{props.summary}</div>
                <div className="py-1">
                    <button className="shine-box">
                    <a href='https://www.linkedin.com/in/raghul-reactdev/' target='_blank'>{props.connect}</a></button>
                </div>
                <div className="socialMedia45 flex gap-5 items-center">
                    <div style={{ fontSize: "14px" }}>{props.socialMedia}</div>
                    <a href='https://www.linkedin.com/in/raghul-reactdev/' target='_blank'><Image src={LinkedIn} height={25} width={25} alt="icon_socialMedia" title="LinkedIn" /></a>
                    <a href='https://instagram.com/sometime_human?igshid=MzMyNGUyNmU2YQ==' target='_blank'><Image src={Insta} height={25} width={25} alt="icon_socialMedia" title="Instagram" /></a>
                    <a href='https://discord.com/users/1093177670495383552' target='_blank'><Image src={Discord} height={28} width={28} alt="icon_socialMedia" title="Discord" /></a>
                    <a href='mailto:raghulnishanth195@gmail.com?subject=Connect to Raghul' target='_blank'><Image src={Indeed} height={24} width={26} alt="icon_socialMedia" title="Mail" /></a>
                </div>
            </section>
        </div>
    )
}
