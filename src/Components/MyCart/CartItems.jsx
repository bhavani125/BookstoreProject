import React from "react";
import BookImg from '../../Assests/Home/book2.png'
import './CartItems.css'
import { InCrementBookItems, DeleteBooks } from "../../Service/DataService";

function CartItems(props) {
    // Method to update book order quantity
    const updateCartQuantity = (bookitem, quantitydata) => {
        let obj = {
            quantityToBuy: quantitydata,
        };
        InCrementBookItems(props.bookitem._id, obj)
            .then((response) => {
                console.log(response)
                props.getcartItems()
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // Increase  the books added to cart
    const increment = (bookobj) => {
        let quantity = props.bookitem.quantityToBuy + 1;
        updateCartQuantity(bookobj, quantity);
    }


    // Decreasing the books added to cart
    const decrement = (bookobj) => {
        let quantity = props.bookitem.quantityToBuy - 1;
        updateCartQuantity(bookobj, quantity);
    }
    const deletebooks = (e) => {
        DeleteBooks(e.target.id)
            .then((response) => {
                console.log(response)
                props.getcartItems()

            })
            .catch((error) => {
                console.log(props.bookitem._id)
                console.log(error)
            })
    }

    return (
        <div>
            <div className="CartBooks1">
                <div>
                    <img className="BookImages" src={BookImg} />
                </div>
                <div className="BookInfo">
                    <div className="NameOfBook">{props.bookitem.product_id.bookName}</div>
                    <div className="AuthorOne">{props.bookitem.product_id.author}</div>
                    <div className="PriceOne">
                        <div className="ActaulpriceOne">Rs.{props.bookitem.product_id.price}</div>
                        <div className="DiscountpriceOne">Rs.{props.bookitem.product_id.discountPrice}</div>
                    </div>
                </div>
            </div>
            <div className="MinusPlusIcons">
                <div className="Counter">

                    <div className="MinusCounter" >
                        <img src="https://img.icons8.com/fluency-systems-regular/24/000000/minus.png" onClick={() => decrement(props.bookitem)} />
                    </div>

                    <div className="MainCartValue">
                        <div className="MainCart">

                            {props.bookitem.quantityToBuy}

                        </div>
                    </div>
                    <div className="PlusCounter">
                        <img src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png" onClick={() => increment(props.bookitem)} />
                    </div>

                </div>
                <div id={props.bookitem._id} onClick={deletebooks}>Remove</div>
            </div>



        </div>


    )
}
export default CartItems