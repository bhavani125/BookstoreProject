import React from "react";

import './BooksData.css'
import BookImg from '../../Assests/Home/book2.png'
// import DisplaySingleBook from "./SingleBook";

function BooksData(props) {

    const displayBook = (data) => {
        props.ListentoOpenBook(true)
        props.ListenToBookInfo(data)
    }

    return (
        < div className="Books" onClick={()=> displayBook(props.book)}>
            <div className="img">
                {/* <img id="bookimg" src='../../Assests/Home/book2.png' alt="" /> */}
                <img id="bookimg" src={BookImg} alt="" />
            </div>

            <div className="bookinfo">
                <div className='name'><h>{props.book.bookName}</h></div>
                <div className='AuthorName'>by {props.book.author}</div>
                <div className='BookRatings'>
                    <div className='RatingPoints'>4.5</div>
                    <div className='rating'>(20)</div>
                </div>
                <div className='quantity'>{props.book.quantity}</div>

                <div className='PriceContainer'>
                    <div className='Price'>Rs.{props.book.price} </div>
                </div>

            </div>
        </div >
    )
}
export default BooksData
