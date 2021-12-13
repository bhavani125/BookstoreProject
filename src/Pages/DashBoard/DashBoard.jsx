import React, { useEffect, useState } from "react";
import { GetBooks } from "../../Service/DataService";

import BooksData from "../../Components/BookData/BooksData";
import Home from "../../Components/Home/Home";
import './DashBoard.css'
import Footer from "../../Components/Footer/footer";
import DisplaySingleBook from "../../Components/BookData/SingleBook";
import MyCart from "../../Components/MyCart/MyCart";

function DashBoard() {

    const [booksarray, setbooksarray] = useState([])
    const [displayParticularBook, setdisplayParticularBook] = useState(false)
    const [singleBooksInfo, setSingleBooksInfo] = useState("")


    // getting all the books list array from server
    const getbooks = () => {
        GetBooks()
            .then((response) => {
                //    console.log(response)
                console.log(response.data.result)
                setbooksarray(response.data.result)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    useEffect(() => {
        getbooks()
    }, [])

    //    Opening the particular Single book

    const ListentoOpenBook = (data) => {
        // console.log(data)
        if (data == true) {
            setdisplayParticularBook(true)
        }
        else if (data == false) {
            setdisplayParticularBook(false)
        }
    }
    // when we click on any book we get that particular info
    const ListenToBookInfo = (data) => {
        setSingleBooksInfo(data)
    }
    const [displayMyCart, setdisplayMyCart] = useState(false)

    const ListenToCart = (data) => {
        if (data == true) {
            setdisplayMyCart(true)
        } else if (data == false) {
            setdisplayMyCart(false)
        }

    }
    return (
        <div>
            {
                displayMyCart ? <MyCart />
                    :

                    <div className="maincontainer">

                        <Home ListenToCart={ListenToCart} />

                        <div className="main">
                            <div className="BookContainer">

                                {
                                    displayParticularBook ? < DisplaySingleBook singleBooksInfo={singleBooksInfo} />
                                        : booksarray.map((book) => < BooksData book={book} ListentoOpenBook={ListentoOpenBook} ListenToBookInfo={ListenToBookInfo} />)
                                }

                            </div>

                        </div>

                        <Footer />
                    </div >

            }
        </div>
    )
}
export default DashBoard


//     return (
//         <div>
//             {
//                 displayMyCart ? <MyCart />
//                     : <div className="maincontainer">

//                         <Home ListenToCart={ListenToCart} />

//                         <div className="main">
//                             <div className="BookContainer">

//                                 {
//                                     displayParticularBook ? < DisplaySingleBook singleBooksInfo={singleBooksInfo} />
//                                         : booksarray.map((book) => < BooksData book={book} ListentoOpenBook={ListentoOpenBook} ListenToBookInfo={ListenToBookInfo} />)
//                                 }

//                             </div>

//                         </div>

//                         <Footer />
//                     </div >
//             }

//         </div>
//     )
// }
// export default DashBoard