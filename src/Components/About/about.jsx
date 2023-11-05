import React from 'react'
import about from '../../images/about.jpg'
import about1 from '../../images/about1.png'
import about2 from '../../images/about2.png'
import style from '../Terms&condition/terms.module.css'
import styles from './about.module.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

export default function About() {
    return (
        <>
            <div className='container '>
                <Zoom center>
                    <div className={style.banner}>
                        <img src={about} />
                    </div>
                </Zoom>



                <div className={style.terms_content1}>

                    <Fade bottom cascade><div className={styles.sectoion1}>
                        <img src={about1} />

                        <div className={styles.section_parah}>
                            <p>We are crafting since the 1800's. SuperSri.com is a window for Indian arts to open for worldwide. The name might be new but the crafting is practiced from generations.  Our craftsmen’s forefathers helped to create history, by crafting temples, sculptures, monuments.</p>
                            <p>Vishnu pad temple in Gaya was built by our worker's forefathers, and the stone used in making was taken from near one of our workshops near Gaya, Bihar, India. The temple was crafted in that place then transported and assembled at the place where the monument is still counted in holy places oh Hinduism.</p>
                        </div>

                    </div></Fade>

                    <Fade bottom cascade><div className={styles.sectoion2}>

                        <div className={styles.section_parah1}>
                            <p>Our workshop in Rajasthan is famous for Marble sculptures and famous artist whose art has been travelled by various parts of the world. The craft men's craft sculptures like Ganesha, Lakshmi, Shiva,  Krishna, Hanuman, Saraswati, Durga Murti, Vishnu and Lord Buddha in marble, brass, polyresin, brass, and wood.  </p>
                            <p>Our Bodh Gaya Workshop is specialized for the Buddha statue made in the holy of enlightenment. The Craftsmen craft their art in wood and black stone and white marble.</p>
                        </div>

                        <img src={about2} />

                    </div></Fade>


                </div>

            </div>

        </>
    )
}
