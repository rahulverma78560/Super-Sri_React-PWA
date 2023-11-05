import { useEffect, useState } from 'react'
import style from './scrollup.module.css'

export default function Scrollup() {

    const [isVisible, setIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", ListenToScroll);
        return () => window.removeEventListener(ListenToScroll);
    }, []);

    const ListenToScroll = () => {
        let heightToHidden = 300;
        const winscroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winscroll > heightToHidden) {
            setIsVisible(true);

        }
        else {
            setIsVisible(false);
        }
    };

    return (
        <>
            {isVisible && (
                <div className={style.scroll} onClick={goToTop} >
                    <h3> Up</h3>
                </div>
            )}


        </>


    )
}
