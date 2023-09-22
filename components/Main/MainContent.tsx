import Image from "next/image";
import './MainCont.css';
import LinkedIn from '../../public/FrontPageIcons/linkedIn.svg'
import Insta from '../../public/FrontPageIcons/insta.svg'
import Indeed from '../../public/FrontPageIcons/indeed.svg'
import Discord from '../../public/FrontPageIcons/discord.svg'
import MainImg from '../../public/mainImg.png'

export default function MainContent(props: any) {

    return (
        <div className="text-white flex justify-center items-center contmain">
            <section className="cont1">
                <div className="fnt">
                    <section className=""><span>{props.greet}</span>
                        <div>
                            <span className="nameclr text-4xl"> I'm </span>
                            <span className="nameclr text-4xl">{props.name}</span>
                        </div>
                    </section>
                    <div>{props.stack}</div>
                </div>
                <div className="stack90">{props.summary}</div>
                <div className="py-1">
                    <button className="btn_talk">{props.connect}</button>
                </div>
                {/* <div className="socialMedia45 flex gap-2 justify-center items-center">
                    <Image src={LinkedIn} height={30} width={30} alt="icon_socialMedia" />
                    <Image src={Insta} height={30} width={30} alt="icon_socialMedia" />
                    <Image src={Discord} height={25} width={25} alt="icon_socialMedia" />
                    <Image src={Indeed} height={25} width={25} alt="icon_socialMedia" />
                </div> */}
            </section>
            <section className="cont2">
                {/* <Image src={MainImg} height={350} alt="dev"/> */}
            </section>
        </div>
    )
}
