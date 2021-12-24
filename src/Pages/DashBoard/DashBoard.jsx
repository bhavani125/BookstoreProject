import React, { useEffect, useState } from "react";
import { GetBooks } from "../../Service/DataService";

import BooksData from "../../Components/BookData/BooksData";
import Home from "../../Components/Header/Header";
import './DashBoard.css'
import Footer from "../../Components/Footer/footer";
import DisplaySingleBook from "../../Components/BookData/SingleBook";
import MyCart from "../../Components/MyCart/MyCart";
import Wishlist from "../../Components/WishList/Wishlist";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



function DashBoard() {

    const [booksarray, setbooksarray] = useState([])
    const [displayParticularBook, setdisplayParticularBook] = useState(false)
    const [singleBooksInfo, setSingleBooksInfo] = useState("")
    const [displayWishlist, setdisplayWishlist] = useState(false)


    const [pagination, setPagination] = React.useState(1);

   
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

    const ListentoOpenWishList = (data) => {
        // console.log(data)
        if (data == true) {
            setdisplayParticularBook(false)

            setdisplayWishlist(true)
        }
        else if (data == false) {
            setdisplayWishlist(false)
        }
    }

    const HandleNextPage = (e, value) => {
        //  console.log(value)
        setPagination(value)
    }

    return (
        <div>
            {
                displayMyCart ? <MyCart ListenToCart={ListenToCart} />
                    :<div className="maincontainer">

                        <Home ListenToCart={ListenToCart} />

                        <div className="main">
                            <div className="BookContainer">

                                {
                                    displayParticularBook ? < DisplaySingleBook singleBooksInfo={singleBooksInfo}
                                        ListentoOpenBook={ListentoOpenBook} ListentoOpenWishList={ListentoOpenWishList} />

                                        : displayWishlist ? <Wishlist ListentoOpenWishList={ListentoOpenWishList} />

                                        : pagination == 1 ? booksarray.slice(0, 8).map((book) => < BooksData book={book} ListentoOpenBook={ListentoOpenBook} ListenToBookInfo={ListenToBookInfo} />)
                                           : pagination == 2 ? booksarray.slice(8, 16).map((book) => < BooksData book={book} ListentoOpenBook={ListentoOpenBook}ListenToBookInfo={ListenToBookInfo} />)
                                           : pagination == 3 ? booksarray.slice(16, 20).map((book) => < BooksData book={book} ListentoOpenBook={ListentoOpenBook} ListenToBookInfo={ListenToBookInfo} />)

                                        : null
                                }



                            </div>


                        </div>
                        <div className="pagination">
                            <Stack spacing={2}>
                                <Pagination count={3} onChange={HandleNextPage} />
                            </Stack>
                        </div>


                        <Footer />
                    </div >

            }
        </div>
    )
}
export default DashBoard

