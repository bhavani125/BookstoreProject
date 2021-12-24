import React from "react";
import './header.css'
import search from '../../Assests/Home/search.png'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

function Home(props) {

    const OpenMyCart = () => {
        props.ListenToCart(true)

    }
    return (
        <div>
            <div className="HomeContainer">

                <div className="HeaderSection">
                    <div className="SearchAndBookIcon">
                        <div className="Section1">
                            <img id="bookIcon" src="https://img.icons8.com/ios/30/000000/open-book.png" />
                            <div>BookStore</div>
                        </div>

                        <div className="SearchSec">
                            <Paper
                                component="form" id="papaerId"
                                

                            >
                                <img id="search" src={search} alt="" />
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search "
                                    inputProps={{ 'aria-label': 'search ' }}
                                />
                            </Paper>
                        </div>
                    </div>
                    <div className="profileAndCart">
                        <div className="profileIcon">
                            <img id="icons" src="https://img.icons8.com/ios/24/000000/manager.png" />
                            <div>profile</div>
                        </div>
                        <div className="CartIcon">
                            <img id="icons" src="https://img.icons8.com/ios/24/000000/favorite-cart.png" onClick={OpenMyCart} />
                            <div >Cart</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="TotalBooks">
                <div className="bookheading">Books(128items)</div>
                <button>Sort by relevance</button>
            </div> */}
        </div>
    )
}
export default Home