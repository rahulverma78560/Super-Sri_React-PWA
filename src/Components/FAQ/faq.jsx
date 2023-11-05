import React from 'react'
import FAQ from '../../images/faq.jpg'
import style from './faq.module.css'

export default function Faq() {
    return (
        <>

            <div className='container'>
                <div className={style.faq_img}>
                    <img src={FAQ} />
                </div>
                <div className={style.faq_content}>
                    <h3>1, How long have you been in business?</h3>

                    <p>We are crafting since 1800's. SuperSri.com is a window for Indian arts
                        to open for worldwide. Name might be new but the crafting is practiced from generations.
                        Our craftsmen’s forefathers helped to create history’s, by crafting temples, sculptures, monuments.</p>

                    <h3>2, What makes you different from your competitors?</h3>

                    <p>The connecting between the artist and the buyer cutting middleman ship helps our craftsmanship 
                        to get its worth, on the other hand the buyer gets the benefit to pay the right price. This make 
                        all the different from all our competition.  </p>

                    <h3>3, From where do you operate?</h3>

                    <p>More than four workshop are located in various parts of India where the stone is mined. 
                        Like Makrana, Rajasthan (Special for white marble Statue), BodhGaya, Bihar(Special for Buddha Statue),
                         Kolkata (Special for Kali Statue), Mahabalipuram, Tamilnadu (Special for Kali Wooden and black granite Statues)</p>

                    <h4>Returns</h4>

                    <h3>1, Do you accept returns or exchanges?</h3>

                    <p>We Accept return request with an acceptable request for limited time period. No exchange are accepted 
                        because every product is arranged for the specific request.  </p>

                    <h3>2, Do you allow refunds for a change of mind? If so, how long do customers have to contact you?</h3>

                    <p>Refund is applicable in some conditions, For more info go through our Refund and cancelation terms.</p>

                    <h4>Shipping</h4>

                    <h3>1, To where do you ship? How long does it take you to process an order before it is dispatched?</h3>

                    <p>All over the world, where ever it’s possible to ship our product. The time to dispatch depends on the crafting team,
                         and time for shipment to reach its destination depends on the shipping partner like FedEx, DHL etc. </p>

                    <h3>2, Where are your packages shipped from?</h3>

                    <p>Every product we sell is make and crafted in India and Dispatched from various workshop from India depending on the types of the Art.</p>

                    <h3>3, Do you ship packages internationally?</h3>

                    <p>Yes</p>

                    <h3>4, How do you price your postage? You can link to your postage page.</h3>

                    <p>We have many shipment partners which gives us their quotation of shipment, through which we choose the best deal by our A.I. Technology reflecting in the shipping cart.</p>

                    <h4>Payment methods</h4>

                   <h3>1, What payment methods do you accept?</h3>

                   <p>We accepts all International and Domestic with a wide range payments like Mastercard, Visa, Rupay etc. with the help of payment gatway like Razorpay,ccavenue etc. </p>

                   <h3>2, If you accept bank transfer, how long do customers have to make the payment before their order is placed?</h3>

                    <p>Yes we accept payments directly in our bank account (Account number can be found in secure payment page)(Click Here). First email us (infosupersricraft@gmail.com) to get your order finalized by our conformation mail then you can transfer in the bank.</p>

                    <h4>For any other FAQ [contact-form][/contact-form]</h4>

                </div>
            </div>

        </>
    )
}
