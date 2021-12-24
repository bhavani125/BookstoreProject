import React from 'react'
import Footer from '../Footer/footer'
import Home from '../Header/Header'

import BookImg from '../../Assests/Home/book2.png'
import { DeleteWishlistBooks, GetWishlistBooks } from '../../Service/DataService';
import './Wishlist.css';

function Wishlist(props) {
    const [wishListitems, setWishListitems] = React.useState([]);

    const getwishlistItems = () => {
        GetWishlistBooks()
            .then((response) => {
                console.log(response.data.result)
                const itemsList = response.data.result;
                setWishListitems(itemsList)
            })
            .catch((error) => {
                console.log(error)
            })
    }
 console.log(wishListitems)
 
    React.useEffect(() => {
        getwishlistItems()
    }, [])

    const removewishlistbook = (e) => {
        DeleteWishlistBooks(e.target.id)
            .then((response) => {
                console.log(response)
                getwishlistItems()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    // console.log(props)

    const OpenHomePage = () => {
        props.ListentoOpenWishList(false)
    }
    return (

        <div className="MyWishlist">
            {/* <Home /> */}
            <div className="MainMyWishlist">
                <div className="Whishlist">
                    <div className="HomeWishlistSection" >
                        <div onClick={OpenHomePage} >Home/</div>
                        <div>MyWishlist</div>
                    </div>
                    <div className='TextAndBooks'>
                        <div className='wishlistText'>My Wishlist </div>
                        <div className='wishlistbooks'>
                            <div className='Wishlistbooks2'>
                                
                                 {
                                    wishListitems.filter(book =>book.product_id != null).map((bookproduct) => (
                                        <div className='WishlistAndDelete'>
                                            <div className="wishlist1">
                                                <div>
                                                    <img className="BookImages" src={BookImg} />
                                                </div>
                                                <div className="BookInfo">
                                                    <div className="NameOfBook">{bookproduct.product_id.bookName}</div>
                                                    <div className="AuthorOne">{bookproduct.product_id.author}</div>
                                                    <div className="PriceOne">
                                                        <div className="ActaulpriceOne">Rs.{bookproduct.product_id.price}</div>
                                                        <div className="DiscountpriceOne">Rs.{bookproduct.product_id.discountPrice}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='Delete' id={bookproduct.product_id._id} onClick={removewishlistbook}>Delete</div>

                                        </div>
                                    ))
                                } 
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Wishlist
