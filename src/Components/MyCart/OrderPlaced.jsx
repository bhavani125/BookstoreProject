import React from 'react'
import orderedsuccessfullImg from '../../Assests/Home/successfull.png'
import Footer from '../Footer/footer'
import Header from "../Header/Header"
import './OrderPlaced.css'
import { Link } from "react-router-dom"

function OrderPlaced() {
    return (
        <div className='mainOrderedSection'>
            <Header />
            <div className='orderPlacedMain'>
                <div className='OrderPlacedSection'>
                    <div className='imageSection'>

                        <img className="successfullimage" src={orderedsuccessfullImg} />

                    </div>

                    <div className='ConformedSection'>
                        hurray!!! your order is confirmed <br /> the order id is #123456
                        save the order id for <br />further communication..
                    </div>

                    <div className='tableSection1'>

                        <table className='Table'>
                            <tr>
                                <th>Email us</th>
                                <th>Contact us</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td className='tdcolumn'> admin@bookstore.com</td>
                                <td className='tdcolumn'>+91 8163475881</td>

                                <td className='tdcolumn'>42, 14th Main, 15th Cross, Sector 4 <br />,opp to BDA complex, near
                                    Kumarakom restaurant,<br /> HSR Layout,Bangalore 560034
                                </td>
                            </tr>

                        </table>

                    </div>
                    <Link to="/DashBoard">
                        <div className='continueshopping'> Continue Shopping</div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OrderPlaced
