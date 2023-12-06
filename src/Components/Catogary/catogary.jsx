import React from 'react'
import style from './catogary.module.css'
import { motion } from "framer-motion";

export default function Catogary() {
   return (
      <>
         {/* <div className={style.cat}>
         <div className={style.scroll}>
            <div className={style.cat_1}>
               <div className={style.car_img}>
                  <motion.img src="/assets/Images/cat1.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
            <div className={style.cat_1}>
               <div className={style.car_img}>
               <motion.img src="/assets/Images/cat2.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
            <div className={style.cat_1}>
               <div className={style.car_img}>
               <motion.img src="/assets/Images/cat3.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
            <div className={style.cat_1}>
               <div className={style.car_img}>
               <motion.img src="/assets/Images/cat4.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
            <div className={style.cat_1}>
               <div className={style.car_img}>
               <motion.img src="/assets/Images/cat5.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
            <div className={style.cat_1}>
               <div className={style.car_img}>
               <motion.img src="/assets/Images/cat1.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
            <div className={style.cat_1}>
               <div className={style.car_img}>
               <motion.img src="/assets/Images/cat2.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
            <div className={style.cat_1}>
               <div className={style.car_img}>
               <motion.img src="/assets/Images/cat3.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
            <div className={style.cat_1}>
               <div className={style.car_img}>
               <motion.img src="/assets/Images/cat4.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
            <div className={style.cat_1}>
               <div className={style.car_img}>
               <motion.img src="/assets/Images/cat5.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
            <div className={style.cat_1}>
               <div className={style.car_img}>
               <motion.img src="/assets/Images/cat1.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
            <div className={style.cat_1}>
               <div className={style.car_img}>
               <motion.img src="/assets/Images/cat2.jpg" />
               </div>
               <h3>Catogary</h3>
            </div>
         </div>
      </div> */}

         <div className='container'>

            <div className={style.cat_container}>
               <h1 className={style.category__heading}>Our Best And Top Category</h1>
               <div className={style.row}>
                  <div className={style.col}>
                     <img src="/assets/Images/cat1.jpg" />
                     <div className={style.cat_btn}>
                        <button>CATOGARY</button>
                     </div>
                  </div>
                  <div className={style.col}>
                     <img src="/assets/Images/cat2.jpg" />
                     <div className={style.cat_btn}>
                        <button>CATOGARY</button>
                     </div>
                  </div>
                  <div className={style.col_hide}>
                     <img src="/assets/Images/cat1.jpg" />
                     <div className={style.cat_btn}>
                        <button>CATOGARY</button>
                     </div>
                  </div>
               </div>
               <div className={style.row}>
                  <div className={style.col}>
                     <img src="/assets/Images/cat3.jpg" />
                     <div className={style.cat_btn}>
                        <button>CATOGARY</button>
                     </div>
                  </div>
                  <div className={style.col}>
                     <img src="/assets/Images/cat4.jpg" />
                     <div className={style.cat_btn}>
                        <button>CATOGARY</button>
                     </div>
                  </div>
                  <div className={style.col_hide}>
                     <img src="/assets/Images/cat1.jpg" />
                     <div className={style.cat_btn}>
                        <button>CATOGARY</button>
                     </div>
                  </div>
               </div>
               <div className={style.row_dis}>
                  <div className={style.col}>
                     <img src="/assets/Images/cat1.jpg" />
                     <div className={style.cat_btn}>
                        <button>CATOGARY</button>
                     </div>
                  </div>
                  <div className={style.col}>
                     <img src="/assets/Images/cat1.jpg" />
                     <div className={style.cat_btn}>
                        <button>CATOGARY</button>
                     </div>
                  </div>

               </div>
            </div>
         </div>

      </>
   )
}
