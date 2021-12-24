import React, { useEffect } from "react";
import BookImg from '../../Assests/Home/book2.png'
// import { OrderedBookItems } from "../../Service/DataService";
import './OrderSummery.css'
// import { Link } from "react-router-dom"
import { GetCartBooks } from "../../Service/DataService";


function OrderSummery(props) {

    // const [Mycartitems, setMyCartitems] = React.useState([]);

    // const getcartItems = () => {
    //     GetCartBooks()
    //         .then((response) => {
    //             console.log(response)
    //             const itemsList = response.data.result;
    //             setMyCartitems(itemsList)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    // React.useEffect(() => {
    //     getcartItems()
    // }, [])


    // const Ordered = () => {
    //     // console.log(Mycartitems)

    //     let orders = [];
    //     for (let i = 0; i < Mycartitems.length; i++) {
    //         let add = {
    //             product_id: Mycartitems[i].product_id._id,
    //             product_name: Mycartitems[i].product_id.bookName,
    //             product_quantity: Mycartitems[i].quantityToBuy,
    //             product_price: Mycartitems[i].product_id.price
    //         };
    //         orders.push(add);
    //     }
    //     let data = {
    //         orders: orders,
    //     };
    //     OrderedBookItems(data)
    //         .then((response) => {
    //             console.log(response)
    //             getcartItems()
    //         })
    //         .catch((error) => {
    //             console.log(error)

    //         })
    // }
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
            {/* <Link to="/OrderSuccess">
                <div className="checkoutbutton" onClick={Ordered}> CHECKOUT </div>
            </Link > */}
        </div>
    )
}

export default OrderSummery