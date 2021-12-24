import React, { useEffect, useState } from "react"
import './singleBook.css'
import BookImg from '../../Assests/Home/book2.png'
import TextField from '@mui/material/TextField';
import { AddBooksToWishlist, GetCartBooks, InCrementBookItems } from "../../Service/DataService";
import { AddBooks } from "../../Service/DataService";
import { Link } from 'react-router-dom'

function DisplaySingleBook(props) {

    const [presentInCart, setPresentInCart] = useState([]);
    const [quantitytoBuy, setquantitytoBuy] = useState(0)


    const getcartBooks = () => {
        GetCartBooks()
            .then((response) => {
                console.log(response)
                let ItemsInCart = response.data.result.filter(function (cartItem) {
                    if (cartItem.product_id._id === props.singleBooksInfo._id) {
                        //  console.log(cartItem.quantityToBuy)
                        setquantitytoBuy(cartItem.quantityToBuy)
                        return cartItem;
                    }
                })
                console.log(ItemsInCart)
                setPresentInCart(ItemsInCart)
            })
            .catch((error) => {
                console.log(error)
            })


    }
    useEffect(() => {
        getcartBooks()
    }, [])

    //posting cartitems into server
    const HandleCartItems = (e) => {
        AddBooks(e.target.id)
            .then((response) => {
                console.log(response)
                getcartBooks()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //handling the put method
    const updateQuantityItems = (quantitydata) => {
        let obj = {
            "quantityToBuy": quantitydata,
        };
        InCrementBookItems(presentInCart[0]._id, obj)
            .then((response) => {
                console.log(response)
                getcartBooks();

            })
            .catch((error) => {
                console.log(error)
            });
        // console.log(obj)
        // console.log(presentInCart[0]._id)
    };

    const HandleincrementCounter = () => {
        let quantity = presentInCart[0].quantityToBuy + 1;
        updateQuantityItems(quantity)
    }

    const HandleDecrementCounter = () => {
        let quantity = presentInCart[0].quantityToBuy - 1;
        updateQuantityItems(quantity)

    }
    const OpenHomePage = () => {
        props.ListentoOpenBook(false)
    }

    //Handling wishlist items 
    const HandleWishlistItems = (e) => {
        props.ListentoOpenWishList(true)

        AddBooksToWishlist(e.target.id)
            .then((response) => {
                console.log(response)
                getcartBooks()
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <div className="BookContainerMain">
            <h2 className="homesection" onClick={OpenHomePage}>Home</h2>
            <div className="SingleBookContainer">
                <div className="ImgAndButtonsContainer">

                    <div className="ImgSection">
                        <img className="BookImage" src={BookImg} />
                    </div>

                    <div className="buttonsSection">
                        {
                            presentInCart.length !== 0
                                ? <div className="Counter">
                                    <div className="MinusCounter" >
                                        <img src="https://img.icons8.com/fluency-systems-regular/24/000000/minus.png" onClick={() => HandleDecrementCounter()} />
                                    </div>
                                    <div className="MainCartValue">
                                        <button id="MainCart">
                                            {quantitytoBuy}
                                        </button>
                                    </div>
                                    <div className="PlusCounter">
                                        <img src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png" onClick={() => HandleincrementCounter()} />
                                    </div>

                                </div>

                                : <div>
                                    <button className="AddToBag" id={props.singleBooksInfo._id} onClick={HandleCartItems}> ADD TO BAG</button>
                                </div>



                        }
                    {/* <Link to="/Wishlist"> */}

                            <button className="Wishlist" id={props.singleBooksInfo._id} onClick={HandleWishlistItems}>WISHLIST</button>
                   {/* </Link> */}
                    </div>

                </div>

                <div className="BookInformation">
                    <div className="BookSection">
                        <div className="BookName">{props.singleBooksInfo.bookName}</div>
                        <div className="BookAuthor"> {props.singleBooksInfo.author}</div>
                        <div className="BookRating">
                            <div className="Rating">4.5</div>

                            <div className="RatingGven">(20)</div>
                        </div>
                        <div className="BookRate">
                            <div className="Originalprice">Rs{props.singleBooksInfo.price}</div>
                            <div className="DiscountPrice">{props.singleBooksInfo.discountPrice}</div>
                        </div>
                        <div style={{ borderBottom: "1px solid lightGrey", width: "620px" }}></div>
                    </div>
                    <div className="BooKDescontainer">
                        <div className="bookdetails"> .Book Detail</div>

                        <p className="Bookpara">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div style={{ borderBottom: "1px solid lightGrey", width: "620px" }}></div>

                    <div className="FeedBack">
                        <div className="customerFeedBack" >Customer Feedback</div>
                        <div className="RatingBox">
                            <div className="Overall-rating">
                                <div>Overall rating</div>
                                <div className="stars">
                                    <img src="https://img.icons8.com/material-outlined/20/000000/christmas-star.png" />
                                    <img src="https://img.icons8.com/material-outlined/20/000000/christmas-star.png" />
                                    <img src="https://img.icons8.com/material-outlined/20/000000/christmas-star.png" />
                                    <img src="https://img.icons8.com/material-outlined/20/000000/christmas-star.png" />
                                    <img src="https://img.icons8.com/material-outlined/20/000000/christmas-star.png" />
                                </div>
                                <div className="InputField">
                                    {/* <OutlinedInput id="" placeholder="Write your review" /> */}
                                    <TextField id="InputBox" label="Write your review" variant="outlined" />

                                </div>
                                <button id="submitrating">Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >


    )
}
export default DisplaySingleBook