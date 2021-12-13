import React from "react";
import BookImg from '../../Assests/Home/book2.png'
import './OrderSummery.css'
// import { InCrementBookItems, DeleteBooks } from "../../Service/DataService";

function OrderSummery(props) {
    
    const Ordered = () => {

    }

    return (
        <div className="mainOrderSummery">
            <div className="summery">Order Summery</div>
            <div className="OrderBooks1">
                <div>
                    <img className="BookImages" src={BookImg} />
                </div>
                <div className="OrderBookInfo">
                    <div className="OrderNameOfBook">{props.bookitem.product_id.bookName}</div>
                    <div className="OrderAuthorOne">{props.bookitem.product_id.author}</div>
                    <div className="OrderPriceOne">
                        <div className="OrderActaulpriceOne">Rs.{props.bookitem.product_id.price}</div>
                        <div className="OrderDiscountpriceOne">Rs.{props.bookitem.product_id.discountPrice}</div>
                    </div>
                </div>
            </div>
            <div className="checkoutbutton" onClick={Ordered}> CHECKOUT </div>
        </div>
    )
}
export default OrderSummery