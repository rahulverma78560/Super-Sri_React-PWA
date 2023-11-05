import React from 'react'
import Pay from '../../images/payments.jpeg'
import style from './payment.module.css'
import payLogo from '../../images/method.png'

export default function Payment() {
  return (
    <>
    
      <div className='container'>

        <div className={style.pay_img}>
            <img src={Pay} />
        </div>

        <div className={style.Pay_content}>

            <p>You can use one of the following payment methods:</p>

            <h3>Using VISA, Master Card, Rupay Card</h3>

            <img src={payLogo} />

            <p>You can pay using your VISA and Master Card.</p>

            <p> We have online Payment Gateway for your convenience.</p>

            <h3>Bank Transfer</h3>

            <table>
              <tr>
                <th>Bank Name </th>
                <td>:</td>
                <td>Panjab and Sind Bank</td>
              </tr>
              <tr>
                <th>Account Name </th>
                <td>:</td>
                <td>SuperSri Stone and Wooden Craft Pvt. Ltd.</td>
              </tr>
              <tr>
                <th>Account Number </th>
                <td>:</td>
                <td>11731100000135</td>
              </tr>
              <tr>
                <th>IFSC Code </th>
                <td>:</td>
                <td>PSIB0021173</td>
              </tr>
              <tr>
                <th>Type of Account </th>
                <td>:</td>
                <td>Current</td>
              </tr>
              <tr>
                <th>Branch </th>
                <td>:</td>
                <td> Bokaro, Jharkhand. </td>
              </tr>
            </table>

        </div>

      </div>
    
    </>
  )
}
