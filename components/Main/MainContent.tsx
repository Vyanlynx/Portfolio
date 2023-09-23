import Image from "next/image";
import './MainCont.css';
import LinkedIn from '../../public/FrontPageIcons/linkedIn.svg'
import Insta from '../../public/FrontPageIcons/insta.svg'
import Indeed from '../../public/FrontPageIcons/indeed.svg'
import Discord from '../../public/FrontPageIcons/discord.svg'
import MainImg from '../../public/mainImg.png'
import { useEffect, useState } from "react";

export default function MainContent(props: any) {
    // const [devState, setDevState] = useState('');
    // useEffect(() => {
    //     props.stack.map((element: any) => {
    //         setDevState(element)
    //     })
    // },[])
    return (
        <div className="text-white flex justify-center items-center contmain">
            <section className="cont1">
                <div className="fnt">
                    <section className=""><span>{props.greet}</span>
                        <div>
                            <span className="nameclr text-4xl"> I am </span>
                            <span className="nameclr text-4xl">{props.name}</span>
                        </div>
                    </section>
                    <div>{props.stack[1]}</div>
                </div>
                <div className="stack90">{props.summary}</div>
                <div className="py-1">
                    <button className="shine-box">{props.connect}</button>
                </div>
                <div className="socialMedia45 flex gap-5 items-center">
                    <div style={{ fontSize: "14px" }}>{props.socialMedia}</div>
                    <Image src={LinkedIn} height={25} width={25} alt="icon_socialMedia" title="LinkedIn"/>
                    <Image src={Insta} height={25} width={25} alt="icon_socialMedia" title="Instagram"/>
                    <Image src={Discord} height={28} width={28} alt="icon_socialMedia" title="Discord"/>
                    <Image src={Indeed} height={23} width={23} alt="icon_socialMedia" title="Indeed"/>
                </div>
            </section>
            <section className="cont2">
                {/* <Image src={MainImg} height={350} alt="dev"/> */}
            </section>
        </div>
    )
}
