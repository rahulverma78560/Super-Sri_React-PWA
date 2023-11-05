import React from 'react'
import shipping from '../../images/shipping.jpg'
import style from './shipping.module.css'
import Logo1 from '../../images/logo1.png'
import Logo2 from '../../images/logo2.png'
import Logo3 from '../../images/logo3.png'
import Logo4 from '../../images/logo4.png'

export default function Shipping() {
  return (
    <>
    <div className='container'>

        <div className={style.shipping_img}>
            <img src={shipping} />
        </div>

        <div className={style.shipping_content}>

            <h3>Approval Packaging</h3>

            <p>When your order is prepared to be shipped, we will email you the photos of your order
                 for your endorsement. Upon your endorsement, your request will be prepared to the shipping division. </p>

            <p>All the Shipment, product will be packed in best possible way to ensure that your shipment reaches 
                to you in its best condition. Our shipment team take around 7 – 10 working days to pack 
                the merchandise contingent on the size of the request ones the order is processed,
                 complete and approved by the buyer. </p>

            <h3>Protection and Insurance </h3>

            <p>When your Order is prepared for dispatch, it will be completely
                 protected and gone through the Insurance according to worldwide law.
                  After both the processes is finished, your order will be given over to the delivery organization. </p>

            <h3>Import Custom Clearance </h3>

            <p>On appearance of your Shipment, you will require to pay for the settlement of any import custom duties if any.</p>

            <p>There might be obligations or charges bringing in icons/sanctuary into your nation. If you don't mind check with 
                your custom specialists to decide the obligations as they differ from nation to nation. For most nations,
                 customs charges are equivalent to deals charge/VAT. Our delivery rates do exclude 
                 the import obligations and it will be payable, if material. </p>

            <p>Any shipment takes around 30 – 45 days for conveyance relying on 
                the nation. The delay of the shipment totally depends on nation to nation 
                in some condition like national circumstance/shipment availability/customs/climate/pandemic etc. </p>

            <p>In Sea way shipment, when your request is given
                 over to the transportation organization, the delivery organization will 
                 do the custom freedom and procedure the dispatch. It takes around 2 – 4 working 
                 days relying on the custom position. </p>


            <div className={style.logo_img}>
                <img src={Logo1} />
                <img src={Logo2} />
                <img src={Logo3} />
                <img src={Logo4} />
            </div>

            <p>For any assistance or clarification on shipping, please feel free to contact us at helpsupersricraft@gmail.com or call us on +91 9281303026.</p>

        </div>

    </div>
    
    </>
  )
}
